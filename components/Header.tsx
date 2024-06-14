"use client";
import React from 'react';
import {motion} from 'framer-motion'

const Header = () => {
  const NavLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#" },
    { name: "Skills", path: "#" },
    { name: "Projects", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <header className='fixed left-1/2 transform -translate-x-1/2 top-4 bg-white p-5 rounded-full'>
      <motion.ul initial={{opacity:0,y:0}} animate={{opacity:1,y:100}} transition={{duration:5}} className='flex gap-x-6'>
        {NavLinks.map((item, index) => (
          <li
            className='hover:bg-pink-400 rounded-full px-2 py-2 text-black border border-red-500'
            key={index}
          >
            {item.name}
          </li>
        ))}
      </motion.ul>
    </header>
  );
}

export default Header;
