'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import { BiSupport } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const h1 = useRef(null)
  const h2 = useRef(null)

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: '.start',
      start: '35% bottom',
      end: 'bottom top',
      // scrub: true,
      markers: true,
    },
  })

useGSAP(()=>{
  tl.from(h1.current,{
    opacity: 0,
    duration: .4,
    y: 50,
    ease: 'power4.inOut'
  })
  tl.from(h2.current,{
    opacity: 0,
    duration: .4,
    y: 50,
    ease: 'power4.inOut'
  })
})

  return (
<div className="start grid grid-cols-4 grid-rows-4 gap-4 p-8 h-screen">
  {/* 1st box: Appointment Scheduling */}
  <div className="row-span-2 col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='gsa  w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaRegCalendarCheck className='text-3xl'/></div>
      <div className=' bg-red-300 overflow-hidden'><h2 ref={h1} className=" text-2xl font-bold mb-2 text-center">Appointment Scheduling</h2></div>
      <div className=' bg-red-300 overflow-hidden'><h1 ref={h2} className='text-lg font-semibold mb-2 text-center'>
        Sync with your calendar to schedule appointments seamlessly.
      </h1></div>
    </div>
  </div>

  {/* 2nd box: Lead Qualification */}
  <div className="col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaPhoneAlt className='text-3xl'/></div>
      <div className=' bg-red-300 overflow-hidden'><h2 ref={h1} className="text-2xl font-bold mb-2 text-center">Lead Qualification</h2></div>
      <div className=' bg-red-300 overflow-hidden'><h1 ref={h2} className='text-lg font-semibold mb-2 text-center'>
        Quickly qualify leads with AI-driven insights for more effective outreach.
      </h1></div>
    </div>
  </div>

  {/* 3rd box: Call Routing */}
  <div className="col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><CiRoute className='text-3xl'/></div>
      <div className=' bg-red-300 overflow-hidden'><h2 ref={h1} className="text-2xl font-bold mb-2 text-center">Call Routing</h2></div>
      <div className=' bg-red-300 overflow-hidden'><h1 ref={h2} className='text-lg font-semibold mb-2 text-center'>
        Efficiently route calls to ensure customers reach the right department.
      </h1></div>
    </div>
  </div>

  {/* 4th box: Lead Generation Engine */}
  <div className="row-span-2 col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaDatabase className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">Lead Generation Engine</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Drive leads with an AI-powered engine working 24/7 for your business.
      </h1>
    </div>
  </div>

  {/* 5th box: 24/7 Availability */}
  <div className="row-span-2 col-span-2 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><BiSupport className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">24/7 Availability</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Always available to provide immediate responses and support.
      </h1>
    </div>
  </div>

  {/* 6th box: AI Personas */}
  <div className="col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[.4vw] font-["gilroy"]'>
      <div><IoChatbubbles className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">AI Personas</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Customize AI personas to enhance engagement and match your brand’s tone.
      </h1>
    </div>
  </div>

  {/* 7th box: Multi-platform Chatbots */}
  <div className="col-span-2 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaGlobe className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">Multi-platform Chatbots</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Engage users on multiple platforms with consistent support across all channels.
      </h1>
    </div>
  </div>

  {/* 8th box: Analytics & Reporting */}
  <div className="col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaChartPie className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">Analytics & Reporting</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Gain actionable insights with real-time analytics and comprehensive reports.
      </h1>
    </div>
  </div>

  {/* 9th box: Custom Knowledge Base */}
  <div className="row-span-2 col-start-4 row-start-3 col-span-1 bg-white rounded-lg p-4 shadow-md backdrop-blur-md">
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1vw] font-["gilroy"]'>
      <div><FaBookOpen className='text-3xl'/></div>
      <h2 className="text-2xl font-bold mb-2 text-center">Custom Knowledge Base</h2>
      <h1 className='text-lg font-semibold mb-2 text-center'>
        Develop a self-service knowledge base to support users around the clock.
      </h1>
    </div>
  </div>
</div>



  )
}

export default BentoGrid