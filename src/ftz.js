(function(){
'use strict'

$.widget("ftz.timezoneTable", {
    options: {
        cities: [],
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        _unixTime: 0,
        _mutable: false
    },
    mutable: function(mutable) {
        if (undefined === mutable) {
            return this._mutable;
        }
        else {
            if (this.mutable() === mutable) {
                return;
            }
            var rowControls = this.element.find('.ftz-rowControlHolder');
            if (mutable) {
                rowControls.animate({'width': '60px'}, function() {
                    rowControls.children().show();
                });
                return;
            }
            else {
                rowControls.children().hide();
                this.element.find('.ftz-rowControlHolder').animate({'width': '6px'});
                return;
            }
        }
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

        this.element.addClass('ftz-table')
             .append('<tfoot><tr><td class="ftz-rowControlHolder"></td><td id=\'ftz-add_city\' class=\'ftz-rowName\'></td><td></td><td colspan=3></td></tr></tfoot>');
        var addCityCell = this.element.find('#ftz-add_city');
        var tableHead = this.element.first('thead');

        var browserLocalTimeRow = $('<tr />');
        tableHead.append(browserLocalTimeRow);
        browserLocalTimeRow._localBrowserTimezoneRow(); 

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
                        var nameDiff = city1.name.toLowerCase().indexOf(query.term.toLowerCase()) - city2.name.toLowerCase().indexOf(query.term.toLowerCase());
                        if (nameDiff === 0) {
                            return city2.population - city1.population;
                        }
                        return nameDiff;
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
            self.addRow(value, true);
        });
        delete this.options.cities; // Don't access this again.
    },
    cities: function() {
        return this.element.find('.ftz-nonlocal').map(function(index, element) {
            if ($(element).data('ftz-_timezoneRow') !== undefined) {
                return $(element)._timezoneRow('city');
            }
            else if ($(element).data('ftz-_unixtimeRow') !== undefined) {
                return $(element)._unixtimeRow('city');
            }
        }).toArray();
    },
    addRow: function(city, suppressEvent) {
        var newRow = $('<tr />');
        this.element.append(newRow);

        // TODO: Must be able to find a better way of special-casing this
        if (city.name === 'Unix time') {
            newRow._unixtimeRow();
        }
        else {
            newRow._timezoneRow({'city': city});
        }
        if (suppressEvent != true) {
            this.element.trigger('citieschanged', [city, this.cities()]);
        }
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
        this._cityName.html(this._getCityName());

        this._zoneAbbr = $('<span />', {'class': 'ftz-zoneAbbr'});

        // TODO: generate this placeholder + size as appropriate to the date format
        this._dateInput = $('<input />', {'type': 'text', 'class': 'ftz-date_input', 'placeholder': '1970-01-01'}).attr('size', 9); 
        this._timeInput = $('<input />', {'type': 'text', 'class': 'ftz-time_input', 'placeholder': '09:00'}).attr('size', 5);
        this._timeZoneOffset = $('<span />', {'class': 'ftz-tz_offset'})._offset();
        this._timeZoneOffset.on('change', function() {self._pushChanges();});

        //this._timeZoneOffset = _timeZoneOffset.data('ftz-_offset');

        this._dstIndicator = $('<td />');

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
                                           // Also, this doesn't seem to work correctly on mobile chrome
                                           self._timeInput.blur();
                                           self._timeInput.focus();
                                       },
                                       change: function() {
                                           self._pushChanges();
                                       } });
        this._timeInput.on('focus click', function() {
            self._timeInput.autocomplete('search', '');
        });

        this._render();

        this._ftz().element.on('timechanged', function() {
            self.refresh();
        });

        this.refresh();
        return this;
    },
    _render: function() {
        this.element.addClass('ftz-row');
        this.element.addClass(this._getClass());
        this.element.append($('<td />', {'class': 'ftz-rowControlHolder'}).append(this._getControls()))
                    .append($('<td />', {'class': 'ftz-rowInfo ftz-rowName'}).append(this._cityName))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._dateInput))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._timeInput))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._timeZoneOffset))
                    .append($('<td />', {'class': 'ftz-rowInfo'}).append(this._zoneAbbr))
                    .append(this._dstIndicator);
    },
    _getClass: function() {
        return 'ftz-nonlocal';
    },
    _getControls: function() {
        var self = this;
        // Controls
        var _delete = $('<span />', {'class': 'ftz-rowControl', 'text': 'X'}).on('click', function() {
            var deletedCity = self.city();
            var ftz = self._ftz();
            self.element.remove();
            // TODO: Make this event spec. less weird
            ftz.element.trigger('citieschanged', [deletedCity, ftz.cities()]); // This is a weirdly-specified event
        });

        return _delete;
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
        var self = this;

        var localDatetime = this.getLocalDatetime();

        var zoneAbbr = localDatetime.format('z');
        if (zoneAbbr === 'GMT/BST') {
            // Peculiar need for special-casing - there could be lots of examples of this, but I live in the UK
            //  so this was particularly noticable :\
            zoneAbbr = localDatetime.isDST() ? 'BST' : 'GMT';
        }
        this._zoneAbbr.text(zoneAbbr);

        this._dateInput.val(localDatetime.format(this._ftz().options.dateFormat));
        this._timeInput.val(localDatetime.format(this._ftz().options.timeFormat));
        this._timeZoneOffset._offset('offsets', this._getValidOffsets());
        this._timeZoneOffset._offset('choose', localDatetime.format('Z'));

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

$.widget("ftz._unixtimeRow", $.ftz._timezoneRow, {
    _getCityName: function() {
        return '<em>UNIX time</em> (UTC)';
    },
    _render: function() {
        this._unixtimeInput = $('<input />', {'type': 'text', 'class': 'ftz-unixtime_input'});
        this.element.addClass('ftz-row');
        this.element.addClass(this._getClass());
        this.element.append($('<td />', {'class': 'ftz-rowControlHolder'}).append(this._getControls()))
                    .append($('<td />', {'class': 'ftz-rowInfo ftz-rowName'}).append(this._cityName))
                    .append($('<td />', {'class': 'ftz-rowInfo', 'colspan': 4}).append(this._unixtimeInput)
                        .append($('<span />', {'class': 'ftz-unixsplanation', 'text': 'sec. since epoch'})));

        var self = this;
        this._unixtimeInput.change(function() {
            var newTime = moment.unix(self._unixtimeInput.val());
            self._ftz().moment(newTime);
        });
    },
    refresh: function() {
        var self = this;

        this._unixtimeInput.val(this._ftz().moment().unix());
        return this;
    },
    city: function() {
        // TODO: this isn't right
        return {
            "id": "U1",
            "name": "Unix time",
            "tz": "Etc/UTC",
            "country": null,
            "population": null
        }
    },
    _getClass: function() {
        return 'ftz-nonlocal';
    },
    _getControls: function() {
        return null;
    },
    getLocalDatetime: function() {
        return this.moment();
    },
    _getValidOffsets: function() {
        return [];
    }
});

$.widget("ftz._localBrowserTimezoneRow", $.ftz._timezoneRow, {
    getLocalDatetime: function() {
        return this.moment().local();
    },
    _getClass: function() {
        return 'ftz-local';
    },
    _getControls: function() {
        return null;
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
            'BACK': 'Clocks go back in ', //'&#9668;',
            'FORWARD': 'Clocks go forward in ', //'&#9658;',
            'NO_DST': ''
        }
        this._direction = $('<span />', {class: 'ftz-dstIndicatorDirection', html: translator[this.options.eventType]});
        
        this._daysFromNow = $('<span />', {class: 'ftz-dstIndicatorDaysFromNow'});
        if (this.options.eventType != 'NO_DST') {
            this._daysFromNow.text(this._getDaysFromNow() + ' days');
            this.element.addClass('ftz-dst');
        }
        else {
            this.element.addClass('ftz-nodst');
            // this._daysFromNow.text('No DST');
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
