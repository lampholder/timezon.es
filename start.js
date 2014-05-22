(function(){
'use strict'

    $(window).load(function () {
        $(function() {
            var fromURL = TIMEZONES.getSetupFromURL(TIMEZONES.getArrayFromURL());
            if(fromURL) {
                $('#timezoneTable').timezoneTable({'cities': fromURL.cities});
                if (fromURL.time) {
                    $('#timezoneTable').timezoneTable('moment', fromURL.time);
                }
                else {
                    TIMEZONES.liveUpdate($('#timezoneTable'));
                }
                var link = TIMEZONES.generateLinkFromSetup(fromURL.cities, fromURL.timeCity, fromURL.time);
                $('#quicklink').text(link).attr('href', link);
            }
            else {
                var cities = JSON.parse($.cookie('cities') || "[]");
                $('#timezoneTable').timezoneTable({'cities': cities});
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(cities)).attr('href', TIMEZONES.generateLinkFromSetup(cities));
                TIMEZONES.liveUpdate($('#timezoneTable'));
            }

            $('#timezoneTable').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(cities)).attr('href', TIMEZONES.generateLinkFromSetup(cities));
            });

            $('#timezoneTable').on('timeEdited', function (e, eventData) {
                var link = TIMEZONES.generateLinkFromSetup($('#timezoneTable').timezoneTable('cities'), eventData.city, eventData.localDateTime);
                $('#quicklink').text(link).attr('href', link);
            });

            console.log('Seriously, ' + 'flulclk'.replace(/l/g, '') + ' timezones ;)');
        });
    });

})();
