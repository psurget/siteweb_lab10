// GOOGLE MAP API AVEC UN MARKER

function initialiserCarte() {
    if (!navigator.geolocation) {
        return false;
    }
    var centreGoogleMap = new google.maps.LatLng(45.483294, -73.868898);
    var optionsGoogleMap = {
        //facteur de zoom
        zoom: 15,
        center: centreGoogleMap,
        /*Mode d'affichage de la carte
        google.maps.MapTypeId.ROADTYPE
        google.maps.MapTypeId.TERRAIN
        google.maps.MapTypeId.SATELLITE
        google.maps.MapTypeId.HYBRID*/
        mapTypeId: google.maps.MapTypeId.ROADTYPE
    };
    var googleMap = new google.maps.Map(document.getElementById("googleMap"), optionsGoogleMap);
    var markerGG = new google.maps.Marker({
        position: { lat: 45.483294, lng: -73.868898 },
        map: googleMap,
        title: "Collège Gérald-Godin"
    });
}