"use client"
import Image from 'next/image'
import React,{useEffect, useState} from 'react'

const data=[
    {
        id:1,
        title:"always fresh & always crispy & always hot",
        image:"/slide1.png"
    },
    {
        id:2,
        title:"we deliver you order whenever in India",
        image:"/slide2.png"
    },
    {
        id:3,
        title:"the best pizza to share with your family",
        image:"/slide3.jpg"
    }
]

   



const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>
            setCurrentSlide((prev)=>(prev === data.length -1 ? 0 : prev+1))
        
        ,2000)
        return ()=> clearInterval(interval);
        },[])
  return (
    <div className='flex flex-col h-[calc(100vh-1rem)] md:h-[calc(100vh-4rem)] lg:flex-row '>
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold bg-fuchsia-50 '>
            <h1 className='uppercase text-4xl text-center md:p-10 p-4 md:text-4xl xl:text-5xl '>
                {data[currentSlide].title}
            </h1>
            <button className=" bg-red-500 text-white py-4 px-8">Order Now</button>
        </div>
        <div className='w-full flex-1 relative'>
            <Image src={data[currentSlide].image} alt="" fill className='object-cover' />
        </div>
      
    </div>
  )
}

export default Slider
