import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className=' h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row flex flex-col text-red-500 '>
     {/*products container*/}
    <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll  lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
       {/*single item*/}
       <div className='flex items-center justify-between mb-4 '>

       <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
       <div className=' '>
    <h1 className='uppercase text-lg font-bold '>silican</h1>
    <span>large</span>
       </div>
    <h2 className='font-bold cursor-pointer'>$72.90</h2>
    <span>X</span>

    </div>
    <div className='flex items-center justify-between mb-4 '>

       <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
       <div className=' '>
    <h1 className='uppercase text-lg font-bold '>silican</h1>
    <span>large</span>
       </div>
    <h2 className='font-bold cursor-pointer'>$72.90</h2>
    <span>X</span>

    </div>
    <div className='flex items-center justify-between mb-4 '>

       <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
       <div className=' '>
    <h1 className='uppercase text-lg font-bold '>silican</h1>
    <span>large</span>
       </div>
    <h2 className='font-bold cursor-pointer'>$72.90</h2>
    <span>X</span>

    </div>
    <div className='flex items-center justify-between mb-4 '>

       <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
       <div className=' '>
    <h1 className='uppercase text-lg font-bold '>silican</h1>
    <span>large</span>
       </div>
    <h2 className='font-bold cursor-pointer'>$72.90</h2>
    <span>X</span>

    </div>
    </div>
     {/*payment container*/}
     <div className='h-1/2 p-4 bg-fuchsia-50  flex flex-col justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-30 gap-6'>
      <div className=' flex justify-between'>
        <span className=''> Subtotal (3items)</span>
        <span className=''>$81.70</span>
      </div>
      <div className=' flex justify-between'>
        <span className=''> Service Cost</span>
        <span className=''>$0</span>
      </div>
      <div className=' flex justify-between'>
        <span className=''> Delivery cost</span>
        <span className=' text-green-500'>free!</span>
      </div>
      <hr className=' my-2'/>
      <div className=' flex justify-between'>
        <span className=''> TOTAL (INCL. VAT)t</span>
        <span className=' font-bold'>$81.70</span>
      </div>
      <button className=' self-end bg-red-500 text-white rounded-md p-2 w-1/2 '>checkout</button>
     </div>
    
    </div>
  )
}

export default Cart
