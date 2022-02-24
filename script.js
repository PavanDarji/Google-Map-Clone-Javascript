mapboxgl.accessToken = 'pk.eyJ1IjoicGF2YW4tZGFyamkiLCJhIjoiY2wwMHcxZmwyMG51azNmcjhwemYzMGxwMSJ9.IsnGptToncYCAWS8_stypw'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    settingMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    settingMap([23.2167, 72.6833])
}

function settingMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl())
    let direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric'
    })
    map.addControl(direction, 'top-left');

}