import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-background">
      <div className="bg-black absolute" style={{height: '20px', width: '20px', borderRadius: '50%', top: '25%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      </div>
      <p className="text-brand text-2xl">
        Hello From Vercel?
      </p>
      <Link to="/menu" className="text-blue-500 hover:underline mt-4">
        Go to Menu
      </Link>
      <p className="text-gray-500 mt-2 mb-20">
        Big ass margin bottom
      </p>
    </div>
  )
}

export default Home