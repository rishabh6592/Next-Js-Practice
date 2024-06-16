import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" w-full flex items-center justify-between bg-red-500 text-white px-5 py-2 w-full ">
      <h2 className="text-5xl">Next-js</h2>
      <div className="flex gap-5 text-3xl">
        <Link href="/">Home</Link>
        <Link href="/about">Aboute</Link>
        <Link href="/contact">Contact</Link>
        
      </div>
   </div>
  )
}

export default Navbar