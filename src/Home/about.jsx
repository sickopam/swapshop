import React from 'react'

import Truck from '../images/about/truck.svg'
import Deal from '../images/about/deal.svg'
import Recycle from '../images/about/recycle.svg'
import Anytime from '../images/about/247.svg'

import Mission from '../images/about/mission.svg'
import Vision from '../images/about/vision.svg'

export default function About() {
  return (
    <div className='py-24 px-[15rem] text-center'>
        <div className='space-y-10'>
            <h2 className='text-2xl font-semibold'>Why choose <span className='text-[#4682b4]'>SwapShop</span>?</h2>
            
            <div className='flex justify-between'>
                <div className='text-center flex flex-row'>
                    {vismis.map((prop, i) => (
                        <div key={i} className='w-[50%]'>
                            <div className='flex justify-center pb-2'>
                                <img src={prop.img} alt='vismis'></img>
                            </div>
                            <h3 className='font-semibold text-lg'>{prop.qs}</h3>
                            <p>{prop.ans}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row justify-between'>
                {foot.map((e, i) => (
                    <div className='grid place-items-center'>
                        <img className='pb-3' key={i} src={e.img} alt='services'></img>
                        <h4 className='font-semibold'>{e.desc}</h4>
                        <h5>{e.desc2}</h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

const foot = [
    {id: 1, img: Truck, desc: 'Fast Delivery', desc2: 'Swift and Fast Delivery'},
    {id: 2, img: Deal, desc: 'Trusted Transactions', desc2: 'Anti Transaction Frauds'},
    {id: 3, img: Recycle, desc: 'Help the Environment', desc2: 'Contribute in Saving the Environment'},
    {id: 4, img: Anytime, desc: 'Anywhere, Anytime', desc2: 'Buy, Sell, Trade 24/7'},
]

const vismis = [
    {id: 5, img: Mission, qs: 'Our Mission:', ans: 'We want to to provide a platform for individuals to buy, sell, and trade their used clothes in an approach that is sustainable, convenient, and accessible.'},
    {id: 6, img: Vision, qs: 'Our Vision:', ans: 'We aspire to be the premier pre-loved fashion marketplace, promoting eco-friendly and accessible fashion for environmentally-conscious consumers seeking new and impactful fashion finds.'}
]