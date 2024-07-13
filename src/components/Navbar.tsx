import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";


const Navbar = () => {
  const user= false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center md:h-24 border-b-2 border-b-red-500 uppercase lg:px-20 lx:px-40">
      <div className="hidden md:flex gap-4">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/*LOGO8*/}
      <div className="md:font-bold text-xl">
        <Link href="/">MASSIMO</Link>
      </div>
      {/*mobile menu*/}

      <div className="md:hidden">
        <Menu />
        </div>
        {/*right links*/}
        <div className="hidden md:flex gap-4 items-center justify-end">
          <div className=" md:absolute top-1 r-2 lg:static flex items-center gap-2 cursor-pointer px-1 rounded-md bg-orange-300">
            <Image src="/phone.png" alt="call" width={20} height={20} />
            <span>123 456 789</span>
          </div>
        {!user?(<Link href="/login">LogIn</Link>
        ):(
        <Link href="/orders">Orders</Link>
        )}
        
        < CartIcon/>
      </div>
     
    </div>
  );
};

export default Navbar;
