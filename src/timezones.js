TIMEZONES = {};

(function(){
'use strict'

    TIMEZONES.trimArray = function(arrayToTrim) {
        var clone = arrayToTrim.slice(0);

        var start = clone[0];
        while (!start && clone.length > 0) {
            clone.shift();
            start = clone[0];
        }
        var finish = clone[clone.length - 1];
        while (!finish && clone.length > 0) {
            clone.pop();
            finish = clone[clone.length - 1];
        }
        return clone;
    }

    TIMEZONES.getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        return results && decodeURIComponent(results[1].replace(/\+/g, " ")) || '';
    };

    TIMEZONES.getArrayFromURL = function() {
        var urlComponents = decodeURI(window.location.pathname).split('/');
        return TIMEZONES.trimArray(urlComponents);        
    };

    TIMEZONES.getDateTimeFromDateTimeField = function(dateTimeField, timezone) {
        var dateTimeRegex = RegExp(/^(\d{4}-\d{2}-\d{2}).(\d{1,2}):?(\d{2})$/);
        var timeRegex = RegExp(/^(\d{1,2})[:.]?(\d{2})$/);

        if (dateTimeRegex.test(dateTimeField)) {
            var componentArray = dateTimeRegex.exec(dateTimeField);
            var hour = componentArray[2] ? componentArray[2].length == 2 : '0' + componentArray[2];
            var dateTime = componentArray[1] + ' ' + hour + ':' + componentArray[3] + ':00';
            return DST.createTimeInTimezone(dateTime, timezone);
        }
        else if (timeRegex.test(dateTimeField)) {
            var componentArray = timeRegex.exec(dateTimeField);
            var newMoment = moment();
            newMoment.tz(timezone); // newMoment.tz(null) returns undefined :(
            return newMoment.hour(componentArray[1]).minute(componentArray[2]).second(0);
        }
        else return undefined;
    }

    TIMEZONES.getSetupFromURL = function(urlComponents) {
        var urlComponents = urlComponents.slice(0);
        var time = undefined;

        if (urlComponents.length == 0) {
            return false;
        }

        var parseCity = function(cityString) {
            cityString = cityString.replace(/[_+]/g, ' ');
            var city =  { 'cityName': cityString.split(',')[0],
                          'country': cityString.split(',')[1] };
            var matches = CITY.findCitiesByName(city.cityName);
            if (matches.length === 1) return matches[0];
            if (matches.length > 1) {
                for (var i = 0; i < matches.length; i++) {
                    if (city.country === matches[i].country) {
                        return matches[i];
                    }
                }
            }
            return undefined;
        }

        var cityList = [];
        var timezoneOfPreviousCity = null;
        while (urlComponents.length > 0) {
            var field = urlComponents.shift();
            var timeExtractedFromField = TIMEZONES.getDateTimeFromDateTimeField(field, timezoneOfPreviousCity);
            if (timeExtractedFromField) {
                time = timeExtractedFromField;
            }
            else {
                var city = parseCity(field);
                cityList.push(city);
                timezoneOfPreviousCity = city.tz;
            }
        }

        if (!time) time = moment();

        return {'cities': cityList, 'time': time};

    };

})();



