'use client'
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const GoogleMap_ = () => {
  const [map, setMap] = React.useState(null)

  const containerStyle = {
    width: '400px',
    height: '400px',
    borderRadius: 20
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }

  const onLoad = React.useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback((map: any) => {
    setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Add your markers or components here */}
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMap_
