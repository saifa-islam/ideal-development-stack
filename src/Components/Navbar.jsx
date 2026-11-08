import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
     <nav className='sticky top-0 z-50 flex items-center justify-between p-4 mt-2 bg-white'>

      <button className='md:hidden text-2xl' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
      <GiHamburgerMenu/>  

      </button>

      <div className='md:center'>
        <img src="logo-text.png" alt="" />
      </div>

      <div className={`${
  isMenuOpen ? "flex" : "hidden"
} absolute top-full left-0 w-full bg-white p-5 shadow-md
  flex-col md:static md:flex md:w-auto md:flex-row
  md:bg-transparent md:p-0 md:shadow-none`}>
        <ul  className='items-left justify-between gap-4  md:flex items-center text-[#475569]'>
          <li className='text-[#DB2777] font-bold'>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <ul className='flex items-center justify-between gap-4 p-4'>
        <li>Sign In</li>
        <li>  <button className='rounded-3xl border p-[10px] text-white bg-[#D91B7E] justify-center '>Sign Up</button>
        </li>
        
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;