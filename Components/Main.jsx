import React from 'react'
import Home from './Home/Home'
import Companies from './Companies/Companies'
import BentoGrid from './Bento/BentoGrid'

const Main = () => {
  return (
    <div className='w-full relative overflow- bg-[#FAF7F0]'>
        <Home/>
        <Companies/>
        <BentoGrid/>
    </div>
  )
}

export default Main