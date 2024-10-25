import React from 'react'
import Image from 'next/image'

const BentoGrid = () => {
  return (
<div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 h-screen">
  {/* 1st box: Taking 2 rows and 1 column */}
  <div className="row-span-2 col-span-1 bg-gray-100 rounded-lg p-4">
    <h2 className="text-2xl font-bold mb-2">Appointment Scheduling</h2>
  </div>

  {/* 2nd box: 1 row and 1 column */}
  <div className="col-span-1 bg-blue-100 rounded-lg p-4">
    <h2 className="text-2xl font-bold mb-2">Lead Qualification</h2>
  </div>

  {/* 3rd box: 1 row and 1 column */}
  <div className="col-span-1 bg-green-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">Call Routing</h3>
  </div>

  {/* 4th box: 2 rows and 1 column */}
  <div className="row-span-2 col-span-1 bg-yellow-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">Lead Generation Engine</h3>
  </div>

  {/* 5th box: 2 rows and 2 columns */}
  <div className="row-span-2 col-span-2 bg-purple-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">24/7 Availability and Instant Responses</h3>
  </div>

  {/* 6th box: 1 row and 1 column */}
  <div className="col-span-1 bg-red-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">AI Personas</h3>
  </div>

  {/* 7th box: 1 row and 2 columns */}
  <div className="col-span-2 bg-pink-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">Multi-platform Chatbots</h3>
  </div>

  {/* 8th box: 1 row and 1 column */}
  <div className="col-span-1 bg-indigo-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
  </div>

  {/* 9th box: 2 rows and 1 column */}
  <div className="row-span-2 col-start-4 row-start-3 col-span-1 bg-teal-100 rounded-lg p-4">
    <h3 className="text-xl font-semibold mb-2">Custom Knowledge Base</h3>
  </div>
</div>

  )
}

export default BentoGrid