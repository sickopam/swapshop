import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import Girl from '../images/girl.svg'

export default function Main() {
  return (
    <>  
        <Navbar/>
        <div className='px-12 py-16 flex justify-between'>
            <div className='w-[35%] space-y-14'>
                <div className='text-[36px] font-semibold'>
                    <h1>Find Your</h1>
                    <h2 className='italic text-[#4682b4]'>Missing Piece.</h2>
                </div>
                <div>
                    <p className='text-lg'>Find your next fashion treasure among our selection of high-quality secondhand clothing, or turn your closet cleanout into cash by selling at SwapShop.</p>
                </div>
                <div>
                    <button id='regis' className='font-semibold'>Start your journey now</button>
                </div>
            </div>

            <img className='w-[50%]' src={Girl}/>
        </div>
        <Footer/>
    </>
  )
}
