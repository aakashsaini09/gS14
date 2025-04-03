import React from 'react'
interface dataType {
    id: string,
    img: string,
    name:string
}
const Sidebar = () => {

    const data = [
        {
            id: "1",
            img: '"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
            name: 'Search'
        },
        {
            id: "2",
            img: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
            name: 'Fav'
        },
    ]
  return (
    
    <>
      <div className='w-[100px] h-screen bg-gray-50 flex flex-col p-2 items-center space-y-4 sticky top-0 z-10 shadow-2xl shadow-purple-400'>
        <img src="./logo.png" width={50} height={50} alt="not found" className='gap-4 flex items-center justify-center py-4' />
            {data.map((item:dataType) => {
                return (
                    <div key={item.id} className='hover:bg-gray-500 rounded-sm p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.img} />
                            </svg>

                        {/* {item.name} */}
                    </div>
                )
            })}
      </div>
    </>
  )
}

export default Sidebar
