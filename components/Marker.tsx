import { MarkerF } from '@react-google-maps/api'
import React from 'react'

const Marker = ({userLocation}: {userLocation: any}) => {
  return (
    <>
      <MarkerF
        position={userLocation}
      ></MarkerF>
    </>
  )
}

export default Marker
