function initMap() {
  var uluru = { lat: 0, lng: 0 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  // google.maps.event.addListener(marker, 'click', function(){
  //   console.log('Teste')
  //   // infoWindow.setContent('<h2>' + marker.title + '</h2>' +
  //   //   marker.content);
  //   // infoWindow.open($scope.map, marker);
  // });
}