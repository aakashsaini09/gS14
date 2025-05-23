import { SelectedBusinessContext } from '@/context/SelectedBusinessContext'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const BusinessToast = ({userLocation}: {userLocation: any}) => {
    const [distance, setDistance] = useState<string | undefined>()
    const {selectedBusiness, setSelectedBusiness} = useContext(SelectedBusinessContext)
    useEffect(() => {
      if(selectedBusiness?.name){
        calculateDistance({
            lat1: selectedBusiness.geometry.location.lat,
            lon1: selectedBusiness.geometry.location.lng,
            lat2: userLocation.lat,
            lon2: userLocation.lng
        })
      }
    }, [selectedBusiness])
    const calculateDistance = ({lat1, lon1, lat2, lon2}: {lat1: number, lon1: number, lat2: number, lon2: number}) => {
     
        const earthRadius = 6371; // in kilometers
    
        const degToRad = (deg: number) => {
          return deg * (Math.PI / 180);
        };
    
        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);
    
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        const distance = earthRadius * c;
       
        setDistance(distance.toFixed(1))
        return distance.toFixed(2); // Return the distance with 2 decimal places
      };

      const onDirectionClick=()=>{
        window.open('https://www.google.com/maps/dir/?api=1&origin='+
        userLocation.lat+','+userLocation.lng+'&destination='
        +selectedBusiness?.geometry?.location?.lat
        +','+selectedBusiness?.geometry?.location?.lng+'&travelmode=driving')
    }

  return (
    <>{selectedBusiness?.name ? 
    <div className='fixed bottom-5 right-5 z-30 flex items-center bg-purple-400 p-5 rounded-2xl gap-5'>
            <div>
                <h2 className='font-semibold text-[20px] text-white'>{selectedBusiness.name}</h2>
                <h2 className='text-white'>{distance} Miles Away</h2>
            </div>
            <div 
                className='bg-purple-500 p-5 rounded-xl hover:scale-105 transition-all cursor-pointer'
                onClick={()=> onDirectionClick()}
            >
                <Image 
                    src={'/send.png'}
                    alt='Not found'
                    width={50}
                    height={50}
                />
            </div>
    </div> : null}
    </>
  )
}

export default BusinessToast
