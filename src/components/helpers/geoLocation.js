function GeoLocation {
    const success = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
    }
    const error = () => {
        console.log('Geo location is not allowed')
        alert('Geo location is not allowed')
    }

    navigator.geolocation 
    ? navigator.getCurrentPosition(success(), error())
    : alert('Your browser is not supported geo location API')
}