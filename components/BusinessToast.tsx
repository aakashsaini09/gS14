import { SelectedBusinessContext } from '@/context/SelectedBusinessContext'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

const BusinessToast = ({userLocation}: {userLocation: any}) => {
    const {selectedBusiness, setSelectedBusiness} = useContext(SelectedBusinessContext)
    useEffect(() => {
      
    }, [selectedBusiness])
    
  return (
    <>{selectedBusiness?.name ? 
    <div className='fixed bottom-5 right-5 z-30 flex items-center bg-purple-400 p-5 rounded-2xl gap-5'>
            <div>
                <h2 className='font-semibold text-[20px] text-white'>{selectedBusiness.name}</h2>
                <h2 className='text-white'>0.7 Miles Away</h2>
            </div>
            <div className='bg-purple-500 p-5 rounded-xl hover:scale-105 transition-all cursor-pointer'>
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
