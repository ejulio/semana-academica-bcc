var geocoder,
    map,
    google,
    icon = 'themes/yellow-swan/img/marker-default.png';

function initialize() {
    'use strict';

    geocoder = new google.maps.Geocoder();

    var latlng = new google.maps.LatLng(0, 0),
        myOptions = {
            zoom: 16,
            center: latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    map.setCenter(latlng);
}

$(document).ready(function () {

    'use strict';

    $('#map-canvas').each(function () {

        var me = $(this),
            address = me.attr('data-address'),
            latitude = me.attr('data-latitude'),
            longitude = me.attr('data-longitude'),
            options;

        if (latitude && longitude) {
          options = { 'location': new google.maps.LatLng(+latitude, +longitude) };
        } else {
          options = { 'address': address };
        }
      
        geocoder = new google.maps.Geocoder();

        initialize();

        geocoder.geocode(options, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                map.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: icon
                });
            } else {
                if (console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    });
});