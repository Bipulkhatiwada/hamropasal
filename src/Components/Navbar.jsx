import React from 'react'
import { useState } from 'react'

const Navbar = () => {
   const [cart, setcart] = useState(0)
   return (
      <>
      <nav className='flex bg-white space-x-64 m-1 p-3 sticky z-10'>
         <div className='ml-3 w-1/4 font-extrabold cursor-pointer'>Hamro Pasal</div>
         {/* <div src='logo' className=' bg-orange-300 w-1/4 text-center'>Hamro Pasal</div> 
         */}
         <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2Fb2%2Fb23666d57f4e17102209423105dfc442.png&f=1&nofb=1' alt='logo' className='w-7 h-7 ml-5'></img>
         <div className='flex space-x-3 mr-2 font-serif'>
           <div className='cursor-pointer' >Login</div>
           <div className='cursor-pointer' >Register</div>
           <div className='w-20 cursor-pointer'>About Us</div>
           <button className='w-10'>🛒{cart}</button>
         </div>
         
      </nav>
      </>
   )
}

export default Navbar