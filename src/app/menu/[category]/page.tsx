import React from 'react'
import Link from 'next/link'
import { pizzas } from '@/data'
import Image from 'next/image'
const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-fuchsia-50'  href={`/product/${item.id} `} key={item.id}>
 {/*image container*/}
         {item.img && (
            <div className='relative h-[80%] '>
           <Image src={item.img} alt="" fill className='object-contain'/>
            </div>
      )}
      <div className='flex justify-between  font-bold mx-8 my-2'>
      <h1 className='text-lg uppercase'>{item.title}</h1>
      <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
      <button className='hidden bg-red-500 group-hover:block uppercase text-white px-4 py-1 rounded-md'>Add To Cart</button>
      </div>
      
        </Link>
       
     
     ))}
      
    </div>
  )
}

export default CategoryPage
