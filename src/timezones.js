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

    $(window).load(function () {
        $(function() {
            //$('#test').timezoneTable({'cities': [{'name': 'Seattle', 'tz': 'America/Los_Angeles'}, {'name': 'London', 'tz': 'Europe/London'}]});
            var cities = JSON.parse($.cookie('cities') || "[]");
            $('#test').timezoneTable({'cities': cities});
            $('#test').on('citieschanged', function (e, city, cities) {
                $.cookie('cities', JSON.stringify(cities));
            });
        });
    });

})();



