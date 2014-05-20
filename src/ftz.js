(function(){
'use strict'

$.fn.tzr = function() {
    // A plague on jQuery for not making this more straightforward.
    return this.data('ftz-_timezoneRowInterface');
}

$.widget("ftz.timezoneTable", {
    options: {
        cities: [],
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        _unixTime: 0,
        _mutable: false
    },
    mutable: function(mutable) {
        var self = this;

        if (undefined === mutable) {
            return this._mutable;
        }
        else {
            if (this.mutable() === mutable) {
                return;
            }
            var rowControls = this.element.find('.ftz-rowControlHolder');
            if (mutable) {
                rowControls.animate({'width': '20px'}, function() {
                    self.element.addClass('visibleControls');
                });
                return;
            }
            else {
                self.element.removeClass('visibleControls');
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
                'results': function() {
                    var cityArray = [];
                    $.each(CITY.cities, function(key, value) {
                        $.each(value, function(key, value) {
                            cityArray.push(value);
                        });
                    });
                    return cityArray;
                }(),
                'text': function(city) {
                    return city.name;
                }
             },
             'minimumInputLength': 3,
             'placeholder': 'Add a city',
             'dropdownAutoWidth': true,
             'formatSelection': function(city) {
                  return city.name + ' (' + city.tz + ')';
              },
             'formatResult': function(city) { 
                  if (city.hasOwnProperty('description')) {
                     return city.name + ' - ' + city.description + ' (' + city.tz + ')';
                  }
                  return city.name + ' (' + city.tz + ')'; 
              },
             'sortResults': function(results, container, query) {
                if (query.term) {
                    return results.sort(function (city1, city2) {
                        // 'EST' should come before 'Esteli', despite its low population
                        if (city1.name.toLowerCase() === query.term.toLowerCase()) return -Infinity;
                        if (city2.name.toLowerCase() === query.term.toLowerCase()) return Infinity;
                        
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
            return $(element).tzr().city();
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
            newRow._remoteTimezoneRow({'city': city});
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
    _init: function() {        
        var self = this;

        if (this.element.prop('tagName').toLowerCase() !== 'tr' ) {
            throw Error('Tried to turn a non-\'tr\' element into a timezoneRow.');
        }
        this.element.empty();

        this.element.data('ftz-_timezoneRowInterface', this);

        this._cityName = $('<span />', {'class': 'ftz-city_name'});
        this._cityName.html(this._getCityName());

        this._render();

        this._ftz().element.on('timechanged', function() {
            self.refresh();
        });

        this.refresh();

        return this;
    },
    _pushChanges: function() {
        this._ftz().element.trigger('timeEdited', {'city': this.city(), 'localDateTime': this.getLocalDatetime()});
    },
    _getControls: function() {
        var self = this;
        // Controls
        var _delete = $('<span />', {'class': 'ftz-rowControl', 'html': '&#10006;'}).on('click', function() {
            var deletedCity = self.city();
            var ftz = self._ftz();
            self.element.find('td')
                    .wrapInner('<div style="display: block;" />')
                    .parent()
                    .find('td > div')
                    .fadeOut(500, function() {
                        self.element.remove();
                        ftz.element.trigger('citieschanged', [deletedCity, ftz.cities()]); // This is a weirdly-specified event
                    });            
        });

        return _delete;
    },
    moment: function() {
        return this._ftz().moment();
    },
    _ftz: function() {
        return this.element.closest('table').data('ftz-timezoneTable');
    }
});

$.widget("ftz._remoteTimezoneRow", $.ftz._timezoneRow, {
    options: {
        city: undefined
    },
    _render: function() {
        var self = this;
        this._zoneAbbr = $('<span />', {'class': 'ftz-zoneAbbr'});

        this._dateInput = $('<input />', {'type': 'text', 'class': 'ftz-date_input', 'placeholder': '1970-01-01'}); 
        this._timeInput = $('<input />', {'type': 'text', 'class': 'ftz-time_input', 'placeholder': '09:00'});
        this._timeZoneOffset = $('<span />', {'class': 'ftz-tz_offset'})._offset();
        this._timeZoneOffset.on('change', function() {
            self._pushChanges();
        });

        this._dstIndicator = $('<td />');

        // For fuck's sake - datepicker and timezone-js's date format strings don't match up.
        this._dateInput.datepicker({ dateFormat: 'yy-mm-dd' }); //this._ftz().options.dateFormat
        this._dateInput.change(function() {
            self._pushChanges();
        });

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
        if (city.hasOwnProperty('description')) {
            return '<em>' + city.name + ' - ' + city.description + '</em> (' + city.tz + ')';
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

        self._dstIndicator.addClass('ftz-dstloading');
        setTimeout(function() {
            self._dstIndicator.removeClass('ftz-dstloading');
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
            return;
        }

        var ambiguity = DST.timeIsAmbiguous(date_string, tz, date_format);
        if (ambiguity) {
            this._ftz().moment(moment(date_string + ' ' + this._timeZoneOffset._offset('val')));
            return;
        }

        this._ftz().moment(DST.createTimeInTimezone(date_string, tz, date_format));

        this._super();
    }
});

$.widget("ftz._unixtimeRow", $.ftz._timezoneRow, {
    _getCityName: function() {
        return '<em>UNIX time</em> (UTC)';
    },
    _render: function() {
        var self = this;

        this._unixtimeInput = $('<input />', {'type': 'text', 'class': 'ftz-unixtime_input'});
        this.element.addClass('ftz-row');
        this.element.addClass(this._getClass());
        this.element.append($('<td />', {'class': 'ftz-rowControlHolder'}).append(this._getControls()))
                    .append($('<td />', {'class': 'ftz-rowInfo ftz-rowName'}).append(this._cityName))
                    .append($('<td />', {'class': 'ftz-unixtime', 'colspan': 2}).append(this._unixtimeInput))
                    .append($('<td />', {'class': 'ftz-rowInfo', 'colspan': 2}).append($('<span />', {'class': 'ftz-unixsplanation', 'text': 'seconds'})));

        this._unixtimeInput.change(function() {
            self._pushChanges();
        });
    },
    _pushChanges: function() {
        var newTime = moment.unix(this._unixtimeInput.val());
        this._ftz().moment(newTime);

        this._super();
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
    getLocalDatetime: function() {
        return this.moment();
    },
    _getValidOffsets: function() {
        return [];
    }
});

$.widget("ftz._localBrowserTimezoneRow", $.ftz._remoteTimezoneRow, {
    getLocalDatetime: function() {
        return this.moment().local();
    },
    refresh: function() {
        this._super();
        // Unlike remote timezones, the local timezone name is the offset from UTC only, and hence is subject to change
        this._cityName.html(this._getCityName());
    },
    _getClass: function() {
        return 'ftz-local';
    },
    _getControls: function() {
        return null;
    },
    _getCityName: function() {
        return '<em>Browser local time</em> (UTC ' + this._ftz().moment().format('ZZ') + ')';
    },
    _getValidOffsets: function() {
        // TODO: Refactor out the copy pasta; the whole concept of browser-specific/country-specific should be streamlined
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
            'BACK': 'Clocks go back ', //'&#9668;',
            'FORWARD': 'Clocks go forward ', //'&#9658;',
            'NO_DST': ''
        }
        this._direction = $('<span />', {class: 'ftz-dstIndicatorDirection', html: translator[this.options.eventType]});
        
        this._daysFromNow = $('<span />', {class: 'ftz-dstIndicatorDaysFromNow'});
        if (this.options.eventType != 'NO_DST') {
            this._daysFromNow.text(this._getDaysFromNow() + ' days later');
            this.element.addClass('ftz-dst');
        }
        else {
            this.element.addClass('ftz-nodst');
        }
        this.element.append(this._direction);
        this.element.append(this._daysFromNow);
        this.element.attr('title', this._getDSTComment());
    },
    _getDaysFromNow: function() {
        // This doesn't seem to give the most intuitive results :\
        return moment(this.options.before).diff(this._row().getLocalDatetime(), 'days');
    },
    _ftz: function() {
        return this.element.closest('table').data('ftz-timezoneTable');
    },
    _row: function() {
        return $(this.element.closest('tr')).tzr();
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
    _timeIcon: function(dstEvent) {
        var clocks = {'100': '&#x1F550;',
                      '130': '&#x1F55C;',
                      '200': '&#x1F551;',
                      '230': '&#x1F55D;',
                      '300': '&#x1F552;',
                      '330': '&#x1F55E;',
                      '400': '&#x1F553;',
                      '430': '&#x1F55F;',
                      '500': '&#x1F554;',
                      '530': '&#x1F560;',
                      '600': '&#x1F555;',
                      '630': '&#x1F561;',
                      '700': '&#x1F556;',
                      '730': '&#x1F562;',
                      '800': '&#x1F557;',
                      '830': '&#x1F563;',
                      '900': '&#x1F558;',
                      '930': '&#x1F564;',
                     '1000': '&#x1F559;',
                     '1030': '&#x1F565;',
                     '1100': '&#x1F55A;',
                     '1130': '&#x1F566;',
                     '1200': '&#x1F55B;',
                     '1230': '&#x1F567;'};
        var clockwise = '&#8635;'
        var anticlockwise = '&#x21BA;'
        var roughTime = parseInt(dstEvent.before.format('hmm'),10);
        if ((roughTime % 100) < 15) {
            roughTime = roughTime - (roughTime % 100);
        }
        else if ((roughTime % 100) < 45) {
            roughTime = roughTime - (roughTime % 100) + 30;
        }
        else {
            roughTime = roughTime - (roughTime % 100) + 100;
            if (roughTime === 1300) roughTime = 100;
        }

        return $('<span>', {'style': 'font-family: "Lucida Sans Unicode";'}).html('woooo' + clocks[roughTime]);
    }
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
