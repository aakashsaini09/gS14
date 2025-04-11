import { BusinessListContext } from '@/context/BusinessListContext'
import { MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'

const Marker = ({userLocation}: {userLocation: any}) => {
  const context = useContext(BusinessListContext)

  if (!context) {
    throw new Error('BusinessListContext must be used within a BusinessListProvider')
  }

  const { businessList, setBusinessList } = context as { businessList: { position: google.maps.LatLngLiteral }[], setBusinessList: React.Dispatch<React.SetStateAction<{ position: google.maps.LatLngLiteral }[]>> }
  
  return (
    <div>
      { businessList && businessList.map((buss: any)=> (
        <MarkerF 
          position={buss.geometry.location}
          ></MarkerF>
      ))}
      <MarkerF
        position={userLocation}
      ></MarkerF>
    </div>
  )
}

export default Marker
