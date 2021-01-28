import React from "react"
import styled from "styled-components"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import { useDestinations } from "./helpers/useDestinations"
import "./styles/leafletStyles.css"

const MapAndTrips = () => {
  //   const { destinations } = useDestinations()

  return (
    // <MapContainer center={[48.4, 4.5]}>
    //   {destinations.map(destination => {
    //     const { id, name } = destination
    //     const { location } = destination
    //     const { longitude, latitude } = location
    //     const position = [longitude, latitude]
    //     return (
    //       <Marker key={id} position={position}>
    //         <Popup id={id}>{name}</Popup>
    //       </Marker>
    //     )
    //   })}
    // </MapContainer>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapAndTrips
