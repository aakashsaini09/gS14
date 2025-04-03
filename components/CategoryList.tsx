"use client"
import React, { useEffect, useState } from 'react'
import Data from '../common/Data'
import CategoryItem from './CategoryItem'
export interface CategoryTypes {
    id: number,
    name: string,
    value: string,
    icon: string,
    color: string
}
const CategoryList = () => {
    const [Category, setCategory] = useState<CategoryTypes[]>([])
    useEffect(() => {
      setCategory(Data.CategoryList as CategoryTypes[])
    }, [])
    
  return (
    <div>
      <h2 className='text-[20px] mt-3 font-bold mb-3'>Select Your Fav Category</h2>
      {Category ? <div className='flex gap-6 mb-5'>
        {Category.map((item) =>(
            <div key={item.id}>
                <CategoryItem category={item}/>
            </div>
        ))}
      </div>: null}

    </div>
  )
}

export default CategoryList
