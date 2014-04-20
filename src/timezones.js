TIMEZONES = {};

(function(){
'use strict'

    TIMEZONES.getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        return results && decodeURIComponent(results[1].replace(/\+/g, " ")) || '';
    };

    TIMEZONES.getSetupFromUrl = function() {
        var entities = decodeURI(window.location.pathname).split('/');
        entities.splice(0,1); // Remove the first, empty element
        if (entities.length < 3) {
            return false;
        }
        var primaryCityString = entities.splice(0, 1);
        var timeInPrimaryCityString = entities.splice(0, 1);
        var secondaryCitiesStrings = entities;


        var primaryCityMatch = CITY.findCitiesByName(primaryCityString);
        if (primaryCityMatch.length > 1) {
            throw "Primary city not uniquely defined";
            //TODO: support unique specification by tz
        }
        var primaryCity = primaryCityMatch[0];

        var secondaryCityMatch = CITY.findCitiesByName(secondaryCitiesStrings[0]);
        if (secondaryCityMatch.length > 1) {
            throw "Secondary city not uniquely defined";
            //TODO: Support unique id by tz + multiple secondary cities
        }
        var secondaryCity = secondaryCityMatch[0];

        var dateTimeRegex = RegExp('^\d{4}-\d{2}-\d{2} \d{2}:?\d{2}$');
        var timeRegex = RegExp('^\d{1,2}:?\d{2}$');

        if (dateTimeRegex.test(timeInPrimaryCityString)) {
            var time = DST.createTimeInTimezone(timeInPrimaryCityString, primaryCity.tz).local();
            return {'cities': [primaryCity, secondaryCity], 'time': time};
        }
        else if (timeRegex.test(timeInPrimaryCityString)) {
            throw "I can only deal with full datetimes right now"
        }
        else throw "Date/time incorrectly formatted";


    };

    $(window).load(function () {
        $(function() {
            var fromURL = TIMEZONES.getSetupFromUrl();
            if(fromURL) {
                $('#test').timezoneTable({'cities': fromURL.cities});
            }
            else {
                var cities = JSON.parse($.cookie('cities') || "[]");
                $('#test').timezoneTable({'cities': cities});
            }


            //$('#test').timezoneTable({'cities': [{'name': 'Seattle', 'tz': 'America/Los_Angeles'}, {'name': 'London', 'tz': 'Europe/London'}]});

            //$('#test').timezoneTable('moment', moment('2001-01-01 20:15').tz('America/Los_Angeles'));
            $('#test').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
            });
        });
    });

})();



