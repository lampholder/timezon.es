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

            $('#test').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
            });

            console.log('Fuck timezones ;P');
        });
    });

})();
