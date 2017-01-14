

// Map
function initMap() {
    var latLng = {lat: 41.903683, lng: -83.408438};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: latLng,
        mapTypeId: 'roadmap',
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
  });

    var contentString = '<div class="info-window">' +
    '<h5><strong>Take A Break Respite Care</strong></h5>' +
    '<div class="info-content">' +
    '<p>15583 S. Dixie Hwy' + '<br>' +
    'Monroe, MI 48161'+'<br>'+'<br>'
    +'(734) 639-1801' +'</p>' + 
    '</div>' +
    '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}

// Map End

