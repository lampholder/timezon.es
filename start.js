(function(){
'use strict'

    $(window).load(function () {
        $(function() {
            var fromURL = TIMEZONES.getSetupFromURL(TIMEZONES.getArrayFromURL());
            if(fromURL) {
                $('#test').timezoneTable({'cities': fromURL.cities});
                $('#test').timezoneTable('moment', fromURL.time);
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
