var map, pointsOnMap, mapStyle = require('./map-style.json');

pointsOnMap = [
    [55.98347,37.1719915, 1, {
        'head'    : 'офис Эрливидео',
        'address' : 'Адрес: Россия, Москва, Зеленоград, Гоголя, д. 2, офис 47',
        'tel'     : 'Телефон: +7 (499) 499-34-04'
    }],
];

// Function return array of markers that was create from "locations" and added to "map"
function setMarkers(map, locations, marker_url) {
    var markers = [];
    var image = new google.maps.MarkerImage(marker_url, null, null, null, new google.maps.Size(28,43));
    for (var i = 0; i < locations.length; i++) {
        var point    = locations[i];
        var myLatlng = new google.maps.LatLng(point[0], point[1]);
        var marker   = new google.maps.Marker({
            position : myLatlng,
            map      : map,
            icon     : image,
            title    : point[3].head,
            zIndex   : point[2]
        });
        marker.infoContent = point[3];
        markers.push(marker);
    }
    return markers;
}

// After function is complete all marker in array will contain object with info for infowindow
function setInfoWindowContent(arrayOfMarkers, infoWindow) {
    for (var i = 0; i < arrayOfMarkers.length; i++) {
        google.maps.event.addListener(arrayOfMarkers[i], 'click', function() {
            var content = composeInfoWindowContent(this.infoContent);
            infoWindow.setContent(content);
            infoWindow.open(map, this);
        });
    }
}

function composeInfoWindowContent(data) {
    return '<ul class="marker-info">' +
            '<li class="marker-info__head">'     + data.head    + '</li>' +
            '<li class="marker-info__address">'  + data.address + '</li>' +
            '<li class="marker-info__tel">'      + data.tel     + '</li>' +
        '</ul>';
}

function initMap(el) {
    var container, mapOptions;

    switch (typeof el) {
        case 'string':
            container = document.querySelector(el);
            break;
        case 'object':
            container = el;
            break;
        default:
            container = document.getElementById('map');
    }

    mapOptions = {
        zoom: 14,
        disableDefaultUI: false,
        scrollwheel: false,
        center: new google.maps.LatLng(55.977731, 37.171968),
        styles: mapStyle
    };

    map = new google.maps.Map(container, mapOptions);

    var mapMarkers = setMarkers(map, pointsOnMap, $(container).attr('data-marker-url'));
    // var mapInfoWindow = new google.maps.InfoWindow();

    // setInfoWindowContent(mapMarkers, mapInfoWindow);
}

function loadScript(el) {
    var script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.src    = 'https://maps.googleapis.com/maps/api/js?v=3&signed_in=false';
    script.onload = function() {
        initMap(el);
    };
    document.head.appendChild(script);
}

module.exports.map = map;
module.exports.initMap = loadScript;
