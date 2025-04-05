navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
  
    document.getElementById('latitudInicial').value = lat;
    document.getElementById('longitudInicial').value = lng;
  });
  