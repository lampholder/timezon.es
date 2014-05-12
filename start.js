(function(){
'use strict'

    $(window).load(function () {
        $(function() {
            var fromURL = TIMEZONES.getSetupFromURL(TIMEZONES.getArrayFromURL());
            if(fromURL) {
                $('#timezoneTable').timezoneTable({'cities': fromURL.cities});
                $('#timezoneTable').timezoneTable('moment', fromURL.time);
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(fromURL.cities)).attr('href', TIMEZONES.generateLinkFromSetup(fromURL.cities));
            }
            else {
                var cities = JSON.parse($.cookie('cities') || "[]");
                $('#timezoneTable').timezoneTable({'cities': cities});
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(cities)).attr('href', TIMEZONES.generateLinkFromSetup(cities));
            }

            $('#timezoneTable').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
                $('#quicklink').text(TIMEZONES.generateLinkFromSetup(cities)).attr('href', TIMEZONES.generateLinkFromSetup(cities));
            });

            console.log('Fuck timezones ;P');
        });
    });

})();
