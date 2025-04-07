"use client"
import React, { useState } from 'react'
import BusinessItem from './BusinessItem'

const BusinessList = ({businessListData}: {businessListData:any}) => {
  // console.log(businessListData)
    const [Count, setCount] = useState(0)
  return (
    <div>
      <h2 className='text-[20px] mt-3 font-bold mb-3 flex justify-between items-center'>Top NearBy Places
      <span className='flex '>
      {Count >= 0 ? (<svg xmlns="http://www.w3.org/2000/svg" 
        onClick={()=>{setCount(Count-3)}}
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
      <div>
        {businessListData.map((business: any, index: any)=>index>=Count && index<Count+3 &&(
          <div key={index}>
            <BusinessItem business={business}/>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default BusinessList
