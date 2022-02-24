import React from 'react'
import { useState } from 'react'

const Navbar = () => {
   const [cart, setcart] = useState('0')
   return (
      <>
      <nav className='flex bg-white space-x-64  p-3 sticky z-10'>
         <div className='ml-2 w-1/4 font-extrabold'>Hamro Pasal</div>
         {/* <div src='logo' className=' bg-orange-300 w-1/4 text-center'>Hamro Pasal</div> 
         */}
         <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2Fb2%2Fb23666d57f4e17102209423105dfc442.png&f=1&nofb=1' className='w-fit h-7 '></img>
         <div className='flex space-x-3 mr-5 font-serif'>
           <div className='cursor-pointer mr-3' >Login</div>
           <div className='cursor-pointer mr-3' >Register</div>
           <div className='w-20 cursor-pointer mr-3'>About Us</div>
           <button className='w-10 '>🛒{cart}</button>
         </div>
         
      </nav>
      </>
   )
}

export default Navbar