export default function geoLocation() {
  const onSuccess = position => {
    const { longitude, latitude } = position.coords

    console.log(position)
    console.log("longitude", longitude)
    console.log("latitude", latitude)

    return { longitude, latitude }
  }
  const onError = error => {
    console.log("Geo location is not allowed", error)
    alert("Geo location is not allowed")
  }

  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(onSuccess, onError)
    : alert("Your browser is not supported geo location API")
}
