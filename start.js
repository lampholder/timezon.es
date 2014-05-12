(function(){
'use strict'

    $(window).load(function () {
        $(function() {
            var fromURL = TIMEZONES.getSetupFromURL(TIMEZONES.getArrayFromURL());
            if(fromURL) {
                $('#timezoneTable').timezoneTable({'cities': fromURL.cities});
                $('#timezoneTable').timezoneTable('moment', fromURL.time);
            }
            else {
                var cities = JSON.parse($.cookie('cities') || "[]");
                $('#timezoneTable').timezoneTable({'cities': cities});
            }

            $('#timezoneTable').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
            });

            console.log('Fuck timezones ;P');
        });
    });

})();
