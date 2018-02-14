function getE(element) {
    return document.getElementById(element);
}

function msg(txt) {
    return window.alert(txt);
}

function initMap() {
    var dirDisplay = new google.maps.DirectionsRenderer;
    var dirService = new google.maps.DirectionsService;
    var map = new google.maps.Map(getE('map'), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
    });
    dirDisplay.setMap(map);
    dirDisplay.setPanel(getE('right-panel'));

    var control = getE('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(dirService, dirDisplay);
    };

    getE('start').addEventListener('change', onChangeHandler);
    getE('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(dirService, dirDisplay) {

    var start = getE('start').value;
    var end = getE('end').value;
    dirService.route({
                origin: start,
                destination: end,
                travelMode: 'DRIVING'
            },
            function(response, status) {
                if (status == 'OK') {
                    dirDisplay.setDirections(response);
                } else {
                    msg('Le calcul du trajet trajet a échoué dû à cette erreur: ' + status);
                } //end if
            } // end function 
        ) // end directionService
}