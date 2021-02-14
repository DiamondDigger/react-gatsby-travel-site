import { useState, useEffect } from "react"

export const useGeoLocation = () => {
  const [location, setLocation] = useState()
  const [error, setError] = useState()

  const onSuccess = position => {
    const { longitude, latitude } = position.coords
    console.log(`longitude: ${longitude}, latitude: ${latitude}`)

    setLocation({ longitude, latitude })
  }

  const onError = error => {
    setError(error.message)
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geo Location is Not supported by your browser")
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return { location, error }
}
