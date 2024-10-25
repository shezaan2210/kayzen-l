'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {

  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const nav = useRef(null)




  const dropdownVariants = {
    hidden: { opacity: 0, y: '20vw' },
    visible: { opacity: 1, y: 0 },
  };

  const arrowVariants = {
    initial: { rotate: 0 },
    rotated: { rotate: 180 },
  };

  

  useGSAP(()=>{
    gsap.from(nav.current, {
        y: -100,
        duration: 2,
        ease: 'power4.inOut',
        opacity: 0,
        delay: 1
    })
  })

  return (
    <div ref={nav} className={`relative z-10 w-full h-[10vh] ${isResourcesHovered || isContactHovered ? 'backdrop-blur-xl' : ''} bg-red-400 flex justify-between items-center px-[6vw] gap-[6vw]`}>
      <div className="text-2xl font-bold">kayzen</div>
      <div className="flex gap-10 capitalize font-medium text-sm">
        {/* Resources Link */}
        <div 
          className="relative flex items-center gap-1"
          onMouseEnter={() => setIsResourcesHovered(true)}
          onMouseLeave={() => setIsResourcesHovered(false)}
        >
          <h3>resources</h3>
          <motion.div
            variants={arrowVariants}
            initial="initial"
            animate={isResourcesHovered ? 'rotated' : 'initial'}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="text-lg"
          >
            <FiChevronDown fill="currentColor" />
          </motion.div>
          {isResourcesHovered && (
            <motion.div 
              className="absolute top-full mt-2 left-0 h-[25vh] w-[20vw] bg-white rounded-xl text-black  shadow-lg py-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Resource 1</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Resource 2</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Resource 3</p>
            </motion.div>
          )}
        </div>

        {/* Contact Us Link */}
        <div 
          className="relative flex items-center gap-1"
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
        >
          <h3>contact us</h3>
          <motion.div
            variants={arrowVariants}
            initial="initial"
            animate={isContactHovered ? 'rotated' : 'initial'}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-lg"
          >
            <FiChevronDown fill="currentColor" />
          </motion.div>
          {isContactHovered && (
            <motion.div 
              className="absolute top-full mt-2 left-0 w-48 bg-white text-black rounded shadow-lg py-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact Option 1</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact Option 2</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact Option 3</p>
            </motion.div>
          )}
        </div>
      </div>
      <div>
        <button className="px-4 py-2 bg-[#72FA4C] font-semibold capitalize rounded-lg text-black">book a demo</button>
      </div>
    </div>
  );
};

export default Navbar;


