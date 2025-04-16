'use client'
import React, { useContext } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { UserLocationContext } from '@/context/UserLocationContext'
import Marker from './Marker'
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext'

const GoogleMap_ = () => {
  const [map, setMap] = React.useState(null)
  const { userLocation, setUserLocation } = useContext(UserLocationContext) as { userLocation: { lat: number; lng: number } | null, setUserLocation: (location: { lat: number; lng: number }) => void };
  const {selectedBusiness, setSelectedBusiness} = useContext(SelectedBusinessContext )
  const containerStyle = {
    width: '100%',
    height: '500px',
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
  {userLocation ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        !selectedBusiness?.geometry?.location
          ? {
              lat: userLocation?.lat ?? center.lat,
              lng: userLocation?.lng ?? center.lng,
            }
          : {
              lat: selectedBusiness.geometry.location.lat,
              lng: selectedBusiness.geometry.location.lng,
            }
      }
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker userLocation={userLocation} />
    </GoogleMap>
  ) : null}
</LoadScript>

  )
}

export default GoogleMap_
