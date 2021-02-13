import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDestinations } from "./helpers/useDestinations"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import styled from "styled-components"

import geoLocation from "./helpers/geoLocation"

const MapAndTrips = () => {
  const { destinations } = useDestinations()
  destinations.forEach(elem => console.log(elem))

  let customLeafletIcon = L.icon({
    iconUrl: require("../assets/images/iconWithCircle.png"),
    iconSize: [20, 30],
    iconAnchor: [13, 25],
    popupAnchor: [10, -30],
  })

  let userIcon = L.icon({
    iconUrl: require("../assets/images/userIcon.png"),
    iconSize: [40, 40],
    iconAnchor: [13, 25],
    popupAnchor: [10, -30],
  })

  let userPosition = {}
  userPosition = geoLocation()
  console.log("userPosition", userPosition)
  console.log("geoLocation", geoLocation)

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
              <br />
              <button onClick={geoLocation}>Show my location</button>
            </Popup>
          </Marker>
        )
      })}
      <Marker
        key={11}
        position={[53.87, 27.51]}
        // position={(longitude, latitude)}
        icon={userIcon ? userIcon : null}
      >
        <Popup id={11}>
          <Title>Your position</Title>
          <br />
          <a href="https://google.com">View info</a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapAndTrips

export const Title = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
`
