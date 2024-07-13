"use client"
import React,{useEffect, useState} from 'react'
type Props={
  id:number;
price:number;
options?: {title:string; additionalPrice:number}[]
}

const Price = ({price,id,options}:Props) => {
  const[total,setTotal]=useState(price);
  const[quantity,setQuantity]=useState(1);
  const[selected,setSelected]=useState(0);
  useEffect(()=>{
    setTotal(quantity*(options ? price+options[selected].additionalPrice :price))
  },[quantity,selected,,options,price])
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-xl'>${total.toFixed(2)}</h2>
      <div>
        {/*option container*/}
        <div className='flex gap-4'>
          {options?.map((option,index)=>(
            <button
             key={option.title}
             className=" min-w-[6rem]  ring-1 ring-red-500   rounded-md p-2 m-auto"
             style={{
              background:selected === index? "rgb(248 113 113)" : "white",
             color:selected===index? "white":"red",
             }} onClick={()=>setSelected(index)}>
              
              {option.title}
            </button>
          ))}
        </div>
        {/*quantity container*/}
        <div className=' flex justify-between items-center p-4'>
          <div className='w-full flex justify-between p-3 ring-1 ring-red-500'>
            <span>Quantity</span>
            <div className='items-center flex gap-4 '>
              <button
               onClick={()=>setQuantity(prev=>(prev>1?prev-1:1))}>{'<'}</button>
              <span>{quantity}</span>
              <button
              onClick={()=>setQuantity(prev=>(prev<9 ?prev+1:9))}>{'>'}</button>

            </div>
          </div>
          <button className='bg-red-500 text-white ring-1 w-56 ring-white border-2 uppercase p-3'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Price
