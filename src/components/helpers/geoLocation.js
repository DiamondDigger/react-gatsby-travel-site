function GeoLocation {
    const success = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
    }
    const error = () => {
        console.log('Geo location is not supported')
        alert('Geo location is not supported')
    }

    navigator.geolocation 
    ? stub
    : stub
}