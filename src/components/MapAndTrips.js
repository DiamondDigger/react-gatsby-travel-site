import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDestinations } from "./helpers/useDestinations"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import styled from "styled-components"

import { useGeoLocation } from "./helpers/useGeoLocation"

const MapAndTrips = () => {
  const { destinations } = useDestinations()
  destinations.forEach(elem => console.log(elem))

  const { location, error } = useGeoLocation()
  const [userLocation, setUserLocation] = useState()

  console.log("location: ", location)
  console.log("userLocation: ", userLocation)

  useEffect(() => {
    location && setUserLocation(location)
  }, [location])

  let customLeafletIcon = L.icon({
    iconUrl: require("../assets/images/iconWithCircle.png"),
    iconSize: [20, 30],
    iconAnchor: [13, 25],
    popupAnchor: [10, -30],
  })

  let userIcon = L.icon({
    iconUrl: require("../assets/images/userIcon3.png"),
    iconSize: [40, 40],
    iconAnchor: [13, 25],
    popupAnchor: [10, -30],
  })

  return (
    <MapContainer center={[35, 24]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {destinations.map(destination => {
        const { id, name } = destination
        const { location } = destination
        const { longitude, latitude } = location
        const position = [latitude, longitude]
        return (
          <Marker
            key={id}
            position={position}
            icon={customLeafletIcon ? customLeafletIcon : null}
          >
            <Popup id={id}>
              <Title>{name}</Title>
              <br />
              <a href="https://google.com">View info</a>
            </Popup>
          </Marker>
        )
      })}
      {userLocation !== undefined ? (
        <Marker
          key={11}
          position={[userLocation.latitude, userLocation.longitude]}
          icon={userIcon ? userIcon : null}
        >
          <Popup id={11}>
            <Title>Your current position</Title>
            <br />
            <h4>Latitude: {userLocation.latitude.toFixed(2)}</h4>
            <h4>Longitude: {userLocation.longitude.toFixed(2)}</h4>
          </Popup>
        </Marker>
      ) : (
        (console.log("Loading.."), error && console.log(error.message))
      )}
    </MapContainer>
  )
}

export default MapAndTrips

export const Title = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
`
