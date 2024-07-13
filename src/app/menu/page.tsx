import {menu} from '@/data'
import React from 'react'
import Link from 'next/link'
const Menupage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map(category=>(
<Link href={`/menu/category.slug`}
 key={category.id} 
className='w-full h-1/2 bg-cover p-8 md:h-[50vh]' 
style={{backgroundImage:`url(${category.img})`}}
>
<div className={ `text-${category.color} w-1/2` }>
  <h1 className='uppercase font-bold color text-3xl'>{category.title}</h1>
  <p className='text-sm my-4 '>{category.desc}</p>
  <button className={`hidden  lg:block bg-${category.color} text-${category.color === "black" ? "white" : "white"} py-2 px-4 rounded-md`}>Explore</button>
  </div>
</Link>

      ))}
    </div>
  )
}

export default Menupage
