import Image from 'next/image'
import React from 'react'

import Countdown from './Countdown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg[url('/offerBg.png')]">
        {/*text container*/}
        <div className=' flex-1 flex flex-col justify-center items-center text-center p-6 gap-8'>
            <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
            <p className='text-white xl:text-xl'>Progressively simplify effective e-tailors and processcebntric methods of empowerment. Quickly pontificate parallel.</p>
            <Countdown/>   
           <button className='text-white bg-red-500 px-4 py-2 rounded-md'> Order Now</button> 
        
        </div>
        {/*image container*/}
        <div className='flex-1 w-full relative md:h-full'>
            <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
        </div>
      
    </div>
  )
}

export default Offer
