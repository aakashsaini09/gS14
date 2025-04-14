import { BusinessListContext } from '@/context/BusinessListContext'
import { InfoBox, MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'

const Marker = ({userLocation}: {userLocation: any}) => {
  const context = useContext(BusinessListContext)

  if (!context) {
    throw new Error('BusinessListContext must be used within a BusinessListProvider')
  }

  const { businessList, setBusinessList } = context as { businessList: { position: google.maps.LatLngLiteral }[], setBusinessList: React.Dispatch<React.SetStateAction<{ position: google.maps.LatLngLiteral }[]>> }
  
  return (
    <div>
      { businessList && businessList.map((buss: any, index)=>index<=5 && (
        <MarkerF 
          position={buss.geometry.location}
          icon={{
            url:'/userLocation.png',
            scaledSize: new google.maps.Size(50, 50)
          }}>
             <InfoBox position={buss.geometry.location}>
                  <div
                    style={{
                      backgroundColor: "#c084fc",
                      opacity: 1,
                      padding: 7,
                      color: "white",
                      borderRadius: 10,
                      width: 100,
                    }}
                  >
                    <div style={{ fontSize: 13, color: '#08233B'}}>
                      {buss.name}
                    </div>
                  </div>
                </InfoBox>
          </MarkerF>
      ))}
      <MarkerF
        position={userLocation}
        icon={{
          url:'/locatio.png',
          scaledSize: new google.maps.Size(50, 50)
        }}
      ></MarkerF>
    </div>
  )
}

export default Marker
