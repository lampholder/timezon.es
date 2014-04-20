(function(){
'use strict'

$.widget("ftz.timezoneTable", {
    options: {
        cities: [],
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        _unixTime: 0,
    },
    _isFtz: function() {
        return true;
    },
    _init: function() {
        if (this.element.prop('tagName').toLowerCase() !== 'table' ) {
            throw Error('FTZ Timezone table must be applied to a <table> dom element.')
        }
        this.element.empty();

        var self = this;
        self.moment(moment()); // Initialise the internal unixtime representation of now to now
        //self.moment().seconds(0).milliseconds(0);

        this.element.addClass('ftz-table')
             //.append('<thead><tr><th>Location</th><th>Date</th><th>Time</th><th>Offset</th><th>Local DST</th></tr></thead>')
             .append('<tfoot><tr><td class="ftz-rowControl"></td><td id=\'ftz-add_city\' class=\'ftz-rowName\'></td><td></td><td></td><td></td></tr></tfoot>');
        var addCityCell = this.element.find('#ftz-add_city');
        var tableHead = this.element.first('thead');

        var browserLocalTimeRow = $('<tr />');
        tableHead.append(browserLocalTimeRow);
        browserLocalTimeRow._localBrowserTimezoneRow(); //{'city': {'id': -1, 'name': 'Browser local time ', 'tz': 'UTC ' + moment().format('ZZ')}});

        var selector = $('<span/>', {'id': 'ftz-selector', 'width': '100%'});
        addCityCell.append(selector);

        selector = selector.select2(
            {'data': {
                'results': CITY.cities,
                'text': function(city) { return city.name; }
             },
             'minimumInputLength': 3,
             'placeholder': 'Add a city',
             'dropdownAutoWidth': true,
             'formatSelection': function(city) { return city.name + ' (' + city.tz + ')'; },
             'formatResult': function(city) { return city.name + ' (' + city.tz + ')'; },
             'sortResults': function(results, container, query) {
                if (query.term) {
                    return results.sort(function (city1, city2) {
                        // Type 'SEA' - 'Seattle' should come before 'Swansea'
                        return city1.name.toLowerCase().indexOf(query.term.toLowerCase()) - city2.name.toLowerCase().indexOf(query.term.toLowerCase());
                    });
                }
             }
            }
        );

        selector.on('change', function(e) {
            var city = selector.select2('data');
            self.addRow(city);
            selector.select2('val', null);
        });

        $.each(this.options.cities, function(index, value) {
            self._addRow(value);
        });
    },
    addRow: function(city) {
        this.options.cities.push(city);
        var newRow = this._addRow(city);
        this.element.trigger('citieschanged', [city, this.options.cities]); // This isn't working
        return newRow;
    },
    _addRow: function(city) {
        var newRow = $('<tr />');
        this.element.append(newRow);
        var timezoneRow = newRow._timezoneRow({'city': city});
        return newRow;        
    },
    moment: function(value) {
        if (undefined === value) {
            return moment.unix(this.options._unixTime);
        }
        else {
            this.options._unixTime = value.format('X');
            this.element.trigger('timechanged');
        }
    }
});

$.widget("ftz._timezoneRow", {
    options: {
        city: undefined
    },
    _init: function() {
        if (this.element.prop('tagName').toLowerCase() !== 'tr' ) {
            throw Error('Tried to turn a non-\'tr\' element into a timezoneRow.');
        }
        this.element.empty();

        var self = this;

        this._cityName = $('<span />', {'class': 'ftz-city_name'});
        // TODO: generate this placeholder + size as appropriate to the date format
        this._dateInput = $('<input />', {'type': 'text', 'class': 'ftz-date_input', 'placeholder': '1970-01-01'}).attr('size', 9); 
        this._timeInput = $('<input />', {'type': 'text', 'class': 'ftz-time_input', 'placeholder': '09:00'}).attr('size', 5);
        var _timeZoneOffset = $('<span />', {'class': 'ftz-tz_offset'})._offset();
        _timeZoneOffset.on('change', function() {self._pushChanges();});

        this._timeZoneOffset = _timeZoneOffset.data('ftz-_offset');

        this._dstIndicator = $('<span />');

        // For fuck's sake - datepicker and timezone-js's date format strings don't match up.
        this._dateInput.datepicker({ dateFormat: 'yy-mm-dd' }); //this._ftz().options.dateFormat
        this._dateInput.change(function() {self._pushChanges();});

        var source = function(){
            var times = [];
            for (var h = 0; h < 24; h++) {
                for (var m = 0; m < 60; m += 15) {
                    times.push( ('00' + h).slice (-2) + ':' + ('00' + m).slice(-2) );
                }
            }
            return times;
        }();
        this._timeInput.autocomplete({ source: source,
                                       minLength: 0,
                                       select: function(event, ui) {
                                           this.value = ui.item.value;

                                           // afaik this is the only way to trigger the change event programatically and not have it
                                           // trigger again when the original element actually loses focus :S
                                           self._timeInput.blur();
                                           self._timeInput.focus();
                                       },
                                       change: function() {
                                           self._pushChanges();
                                       } });
        this._timeInput.on('focus click', function() {
            self._timeInput.autocomplete('search', '');
        });

        this.element.addClass('ftz-row');
        this.element.addClass(this._getClass());
        this.element.append($('<td />', {'class': 'ftz-rowControl'}))
                    .append($('<td />', {'class': 'ftz-rowInfo ftz-rowName'}).append(this._cityName))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._dateInput))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._timeInput))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(_timeZoneOffset))
                    .append($('<td />', {'class': 'ftz-dst'}).append(this._dstIndicator));

        this._ftz().element.on('timechanged', function() {
            self.refresh();
        });

        this.refresh();
        return this;
    },
    _getClass: function() {
        return 'ftz-nonlocal';
    },
    city: function(value) {
        if (undefined === value) {
            return this.options.city;
        }
        else {
            this.options.city = value;
            return this;
        }
    },
    getLocalDatetime: function() {
        return this.moment().tz(this.city().tz);
    },
    _getCityName: function() {
        var city = this.city();
        if (undefined === city) {
            throw Error('This should not happen');
        }
        return '<em>' + city.name + '</em> (' + city.tz + ')';
    },
    refresh: function() {
        this._cityName.html(this._getCityName());
        var localDatetime = this.getLocalDatetime();

        this._dateInput.val(localDatetime.format(this._ftz().options.dateFormat));
        this._timeInput.val(localDatetime.format(this._ftz().options.timeFormat));
        this._timeZoneOffset.offsets(this._getValidOffsets()).choose(localDatetime.format('Z'));

        var self = this;
        //self._dstComment.addClass('ftz-loading');
        setTimeout(function() {
            //self._dstComment.removeClass('ftz-loading');
            self._dstIndicator._dstIndicator(DST.getNextDSTEvent(localDatetime));
        }, 1);

        if (this.element.hasClass('ftz-invalid')) {
            this.element.removeClass('ftz-invalid');
            this.element.effect('highlight', {color: '#FFE6E6'}, 180);
        }

        return this;
    },
    _getValidOffsets: function() {
        var localDatetime = this.getLocalDatetime();
        var ambiguity = DST.timeIsAmbiguous(localDatetime.format('YYYY-MM-DD HH:mm') + ':00', this.city().tz);
        if (ambiguity) {
            return ambiguity;
        }
        else return [localDatetime.format('Z')];
    },
    moment: function() {
        return this._ftz().moment();
    },
    _ftz: function() {
        return this.element.closest('table').data('ftz-timezoneTable');
    },
    _getTimezone: function() {
        return this.city() && this.city().tz;
    },
    _pushChanges: function() {
        var date_string = this._dateInput.val() + ' ' + this._timeInput.val() + ':00';
        var date_format = this._ftz().options.dateFormat + ' ' + this._ftz().options.timeFormat;
        var tz = this._getTimezone();

        if (!DST.timeExists(date_string, tz, date_format)) {
            this.element.addClass('ftz-invalid');
            this.element.effect('highlight', {color: '#FF4D4D'}, 450);
            this._dstComment.text('This time does not exist in this time zone.');
            return;
        }

        var ambiguity = DST.timeIsAmbiguous(date_string, tz, date_format);
        if (ambiguity) {
            this._ftz().moment(moment(date_string + ' ' + this._timeZoneOffset.val()));
            return;
        }

        this._ftz().moment(DST.createTimeInTimezone(date_string, tz, date_format));

    }
});

$.widget("ftz._localBrowserTimezoneRow", $.ftz._timezoneRow, {
    getLocalDatetime: function() {
        return this.moment().local();
    },
    /*
    _pushChanges: function() {
        var date_string = this._dateInput.val() + ' ' + this._timeInput.val();
        var date_format = this._ftz().options.dateFormat + ' ' + this._ftz().options.timeFormat;
        var new_moment = moment(date_string, date_format);
        this._ftz().moment(new_moment);
    },
    */
    _getClass: function() {
        return 'ftz-local';
    },
    _getCityName: function() {
        return '<em>Browser local time</em> (UTC ' + moment().format('ZZ') + ')';
    },
    _getValidOffsets: function() {
        // TODO: Refactor our the copy pasta; the whole concept of browser-specific/country-specific should be streamlined
        var localDatetime = this.getLocalDatetime();
        var ambiguity = DST.timeIsAmbiguous(localDatetime.format('YYYY-MM-DD HH:mm') + ':00');
        if (ambiguity) {
            return ambiguity;
        }
        else return [localDatetime.format('Z')];
    }
});

$.widget('ftz._dstIndicator', {
    options: {
    },
    _init: function() {
        this.element.empty();
        var translator = {
            'BACK': '&#9668;',
            'FORWARD': '&#9658;',
            'NO_DST': ''
        }
        this._direction = $('<span />', {class: 'ftz-dstIndicatorDirection', html: translator[this.options.eventType]});
        
        this._daysFromNow = $('<span />', {class: 'ftz-dstIndicatorDaysFromNow'});
        if (this.options.eventType != 'NO_DST') {
            this._daysFromNow.text(this._getDaysFromNow() + ' days away');
        }
        else {
            this._daysFromNow.text('No DST');
        }
        this.element.append(this._direction);
        this.element.append(this._daysFromNow);
        this.element.attr('title', this._getDSTComment());
    },
    _getDaysFromNow: function() {
        var millisBetweenNowAndNextDSTEvent = moment(this.options.before).utc() - this._ftz().moment().utc();
        var DAY = 24 * 60 * 60 * 1000;
        return Math.round(millisBetweenNowAndNextDSTEvent/DAY);
    },
    _ftz: function() {
        return this.element.closest('table').data('ftz-timezoneTable');
    },
    _getDSTComment: function() {
        if (this.options.eventType === 'NO_DST') {
            return 'This territory does not operate daylight savings.'
        }
        else {
            var clocksGoForwardTime = moment.utc(this.options.before.format('YYYY-MM-DD HH:mm:ss')).add('minutes', 1);
            var dateTimeFormat = this._ftz().options.dateFormat + ' ' + this._ftz().options.timeFormat;
            return 'At ' + clocksGoForwardTime.format(dateTimeFormat) + ' local time, clocks in this territory will roll ' + this.options.eventType + ' to ' + this.options.after.format(dateTimeFormat);
        }
    },
});

$.widget('ftz._offset', {
    options: {
        offsets: []
    },
    _init: function () {
        this.element.empty();

        this._select = $('<select />');
        this._text = $('<span />').hide();

        this.element.append(this._select);
        this.element.append(this._text);
    },
    refresh: function () {
        if (this.offsets().length === 0) {
            this._text.text('±--:--');
            this._text.show();
            this._select.hide();
        }
        else if (this.offsets().length === 1) {
            this._text.text(this.offsets()[0]);
            this._text.show();
            this._select.hide();
        }
        else {
            this._select.empty();

            var self = this;
            $.each(this.offsets(), function(index, val) {
                self._select.append($('<option />', {'value': val, 'text': val}));
            });
            this._text.hide();
            this._select.show();
        }
    },
    offsets: function(offsets) {
        if (undefined === offsets) {
            return this.options.offsets;
        }
        else {
            this.options.offsets = offsets;
            this.refresh();
            return this;
        }
    },
    choose: function(choice) {
        this._select.val(choice);
    },
    val: function() {
        if (this.offsets().length == 0) {
            return undefined;
        }
        else if (this.offsets().length == 1) {
            return this.offsets()[0];
        }
        else return this._select.val();
    }
});

})();
