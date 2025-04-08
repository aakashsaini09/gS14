"use client"
import React, { useEffect, useState } from 'react'
import BusinessItem from './BusinessItem'
import Loading from './Loading'

const BusinessList = ({businessListData}: {businessListData:any}) => {
  // console.log(businessListData)
    const [Count, setCount] = useState(0)
    const [loader, setloader] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setloader(false)
      }, 2000)
    
      return () => clearTimeout(timer) // cleanup
    }, [])
    useEffect(() => {
      setCount(0)
      setloader(true)
    }, [businessListData])
    
  return (
    <div>
      <h2 className='text-[20px] mt-3 font-bold mb-3 flex justify-between items-center'>Top NearBy Places
      <span className='flex '>
      {Count >= 0 ? (<svg xmlns="http://www.w3.org/2000/svg" 
        onClick={() => setCount(Count - 3)} 
        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
        stroke="currentColor" className="size-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>): null}
      <svg xmlns="http://www.w3.org/2000/svg" 
              onClick={()=>{setCount(Count+3)}}
        fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" 
        className="size-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

      </span>
      </h2>
    {!loader ?  <div>
        {businessListData.map((business: any, index: any)=>index>=Count && index<Count+3 &&(
          <div key={index}>
            <BusinessItem business={business}/>
          </div>
        ))}
        
    </div>: null}
    {loader ? 
    [1, 2, 3].map((item, index)=>(
      <Loading key={index}/>
    ))
    :
     null}
    </div>
  )
}

export default BusinessList
