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
            img: './',
            name: 'Fav'
        },
        {
            id: "2",
            img: 'dkf',
            name: 'Search'
        },
    ]
  return (
    <>
      <div className='w-[100px] h-screen bg-gray-600 flex flex-col p-2 items-center space-y-4 sticky top-0'>
        <img src="./logo.png" width={50} height={50} alt="not found" />
            {data.map((item:dataType) => {
                return (
                    <img src={item.img} alt="" />
                )
            })}
      </div>
    </>
  )
}

export default Sidebar
