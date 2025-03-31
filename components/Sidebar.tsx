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
            img: './search.png',
            name: 'Search'
        },
        {
            id: "2",
            img: './heart.png',
            name: 'Fav'
        },
    ]
  return (
    <>
      <div className='w-[100px] h-screen bg-gray-50 flex flex-col p-2 items-center space-y-4 sticky top-0 z-10 shadow-2xl shadow-purple-400'>
        <img src="./logo.png" width={50} height={50} alt="not found" className='gap-4 flex items-center justify-center py-4' />
            {data.map((item:dataType) => {
                return (
                    <div id={item.id} className='hover:bg-gray-500 rounded-sm p-2'>
                        <img src={item.img} alt="" className='w-8 hover:text-purple-700 mx-auto gap-2' />
                        {/* {item.name} */}
                    </div>
                )
            })}
      </div>
    </>
  )
}

export default Sidebar
