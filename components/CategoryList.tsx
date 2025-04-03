import React, { useEffect, useState } from 'react'
import Data from '../common/Data'
import CategoryItem from './CategoryItem'
interface CategoryTypes {
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
      <div>
        {Category.map((item) =>(
            <div>
                <CategoryItem/>
            </div>
        ))}
      </div>

    </div>
  )
}

export default CategoryList
