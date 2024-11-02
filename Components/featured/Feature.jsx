import React from 'react'

const Feature = () => {
  return (
    <div className='w-full h-[200vh] bg-red-200 relative'>
      <h1 className='text text-6xl capitalize font-medium w-1/2 ml-[4vw] pt-[3vw]'>let&apos;s put your front office on autopilot, here&apos;s how </h1>

      <div className='w-full h-[60vh] bg-green-200 mt-[2vw] px-[1vw] py-[1vw] flex gap-[2vw]  '>
        <div className='w-1/3 h-full bg-red-200'></div>
        <div className='w-1/3 h-full bg-red-200'></div>
        <div className='w-1/3 h-full bg-red-200'></div>
      </div>

      <div className='w-full h-[30vh] bg-green-200 mt-[2vw] px-[1vw] py-[1vw]  '>
        <div className='w-full h-full bg-red-200'></div>
      </div>

      <div className='w-full h-[80vh] bg-green-200 mt-[2vw] '></div>
    </div>
  )
}

export default Feature