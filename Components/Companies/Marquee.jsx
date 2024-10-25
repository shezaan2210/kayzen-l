'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Marquee = () => {
  return (
    <div className="marquee-container overflow-hidden">
      <div className="relative h-[80%] w-full pt-[5vw] flex items-center flex-nowrap whitespace-nowrap">
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        >
          {/* Add actual image sources here */}
          <Image src="/logo1.png" alt="Company 1" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo2.png" alt="Company 2" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo3.png" alt="Company 3" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo4.png" alt="Company 4" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo5.png" alt="Company 5" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          {/* Duplicate images for seamless loop */}
          <Image src="/logo1.png" alt="Company 1" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo2.png" alt="Company 2" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo3.png" alt="Company 3" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo4.png" alt="Company 4" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <Image src="/logo5.png" alt="Company 5" width={100} height={100} style={{ width: '14vw', height: '10vh' }} className="mx-4" />
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
