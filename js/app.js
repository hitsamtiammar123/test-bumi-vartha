(function(){
  var map =  L.map('map');

  function setMap(lat, lon){
    map.setView([lat,lon], 5)
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=sFStKSxZmwpH6liN0Gkz', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map)
  
    for(var i = 0; i < 5; i++){
      var marker = L.marker([lat, lon + i]).addTo(map);
      marker.bindPopup("You clicked marker " + (i + 1)).openPopup();
    }
  }

  // setMap(0, 0);

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      setMap(position.coords.latitude, position.coords.longitude)
    })
  }
  else{
    setMap(0,0);
  }

})();