import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' text-red-500 lg:px-20 h-8 md:h-10 xl:px-40 items-center flex justify-between'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p> ©All RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer
