(function(){
'use strict'

$.widget("ftz.timezoneTable", {
    options: {
        timezones: [],
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        _moment: moment.utc(),
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
        self.moment().seconds(0).milliseconds(0);

        this.element.addClass('ftz-table')
             .append('<thead><tr><th>Location</th><th>Date</th><th>Time</th><th>Local daylight savings</th></tr></thead>')
             .append('<tfoot><tr><td id=\'ftz-add_city\'></td><td></td><td></td><td></td></tr></tfoot>');
        var addCityCell = this.element.find('#ftz-add_city');
        var tableHead = this.element.first('thead');

        var browserLocalTimeRow = $('<tr />');
        tableHead.append(browserLocalTimeRow);
        browserLocalTimeRow._localBrowserTimezoneRow({'city': {'id': -1, 'name': 'Browser local time ', 'tz': 'UTC ' + moment().format('ZZ')}});

        var selector = $('<span/>', {'id': 'ftz-selector', 'width': '200px;'});
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
    },
    addRow: function(city) {
        var newRow = $('<tr />');
        this.element.append(newRow);
        var timezoneRow = newRow._timezoneRow({'city': city});
        return newRow;
    },
    moment: function(value) {
        if (undefined === value) {
            return moment(this.options._moment);
        }
        else {
            this.options._moment = moment(value);
            this.element.trigger('timechanged');
        }
    }
});

$.widget("ftz._timezoneRow", {
    options: {
        city: ''
    },
    _init: function() {
        if (this.element.prop('tagName').toLowerCase() !== 'tr' ) {
            throw Error('FTZ Timezone Rows can only be added to FTZ timezone parents.')
        }
        this.element.empty();

        var self = this;

        this._cityName = $('<span />', {'class': 'ftz-city_name'});
        this._dateInput = $('<input />', {'class': 'ftz-date_input'});
        this._timeInput = $('<input />', {'class': 'ftz-time_input'});
        this._dstComment = $('<span />', {'class': 'ftz-dst_comment'});
        this._notificationBox = $('<span />', {'class': 'ftz-notification_box'}).hide();

        this.element.addClass('ftz-row');
        this.element.append($('<td />').append(this._cityName))
                    .append($('<td />').append(this._dateInput))
                    .append($('<td />').append(this._timeInput)
                        .append($('<span />', {'class': 'ftz-notification_box_holder'})
                            .append(this._notificationBox)))
                    .append($('<td />').append(this._dstComment));

        this._dateInput.change(function() {self._pushChanges();});
        this._timeInput.change(function() {self._pushChanges();});

        this._ftz().element.on('timechanged', function() {
            self.refresh();
        });

        this.refresh();
        return this;
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
    refresh: function() {
        var city = this.city();
        this._cityName.text(city.name + ' (' + city.tz + ')');
        var localDatetime = this.getLocalDatetime();

        var fuckwoot = this._ftz();

        this._dateInput.val(localDatetime.format(this._ftz().options.dateFormat));
        this._timeInput.val(localDatetime.format(this._ftz().options.timeFormat));
        this._dstComment.text(this._getDSTComment(localDatetime));

        return this;
    },
    moment: function() {
        return this._ftz().moment();
    },
    notify: function(message, timeInMillis) {
        this._notificationBox.text(message);
        this._notificationBox.show();
    },
    _ftz: function() {
        return this.element.closest('table').data('ftz-timezoneTable');
    },
    _pushChanges: function() {
        var date_string = this._dateInput.val() + ' ' + this._timeInput.val();
        var date_format = this._ftz().options.dateFormat + ' ' + this._ftz().options.timeFormat;
        var tz = this.city().tz;

        // Awaiting the next release of moment.js:
        // https://github.com/moment/moment-timezone/issues/11
        // https://github.com/moment/moment-timezone/pull/25
        var sourceMoment = moment(date_string, date_format);
        var newMoment = moment.tz(tz);
        newMoment.year(sourceMoment.year());
        newMoment.month(sourceMoment.month());
        newMoment.date(sourceMoment.date());
        /*
            // You have to call .hour() twice to achieve the result you want regardless of timezone :()
            var x = moment.tz('2014-03-09 12:00:00', 'America/Los_Angeles')
            x.format() // "2014-03-09T05:00:00-07:00"
            x.hour(1).format() // "2014-03-09T00:00:00-08:00"
            x.hour(1).format() // "2014-03-09T01:00:00-08:00"
        */
        newMoment.hour(sourceMoment.hour());
        newMoment.hour(sourceMoment.hour()); 

        newMoment.minute(sourceMoment.minute());
        newMoment.second(sourceMoment.second());
        newMoment.millisecond(sourceMoment.millisecond());

        if(sourceMoment.hour() !== newMoment.hour() || sourceMoment.minute() !== newMoment.minute()) {
            this.notify('Invalid date in timezone');
        }
        else {
            this._ftz().moment(newMoment);
        }
    },
    _getDSTComment: function(localDatetime) {
        var dst = DST.getNextDSTEvent(localDatetime);
        if (dst.eventType === 'NO_DST') {
            return 'This territory does not operate daylight savings.'
        }
        else {
            return 'Clocks will go ' + dst.eventType + ' in this territory at ' + dst.moment.format('YYYY-MM-DD HH:mm:ss') + ' local time.';
        }
    }
    
});

$.widget( "ftz._localBrowserTimezoneRow", $.ftz._timezoneRow, {
    getLocalDatetime: function() {
        return this.moment().local();
    },
    _pushChanges: function() {
        var date_string = this._dateInput.val() + ' ' + this._timeInput.val();
        var date_format = this._ftz().options.dateFormat + ' ' + this._ftz().options.timeFormat;
        var new_moment = moment(date_string, date_format);
        this._ftz().moment(new_moment);
    },
});

})();



$(function() {
    $('#test').timezoneTable();
});
