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
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(fromURL.cities)).attr('href', TIMEZONES.generateLinkFromSetup(fromURL.cities));
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

            //setInterval(function() {
            //    $('#timezoneTable').timezoneTable('moment', moment());
            //}, 1000);

            console.log('Fuck timezones ;P');
        });
    });

})();
