import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-center h-screen w-screen bg-slate-600'>
      <Link href = './Page1'><button className='bg-green-300 text-slate-500 px-14 py-10 my-60 rounded-lg text-5xl font-medium hover:bg-white hover:scale-90' >what's next to do</button></Link>
    </div>
  )
}

export default page