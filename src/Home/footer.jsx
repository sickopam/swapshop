import React from 'react'

import Truck from '../images/footer/truck.svg'
import Deal from '../images/footer/deal.svg'
import Recycle from '../images/footer/recycle.svg'
import Anytime from '../images/footer/247.svg'

import Mission from '../images/footer/mission.svg'
import Vision from '../images/footer/vision.svg'

export default function Footer() {
  return (
    <div className='bg-[#dcf3f0] py-24 px-[15rem] text-center'>
        <div className='space-y-10'>
            <h2 className='text-2xl font-semibold'>Why choose <a href='/' className='text-[#4682b4]'>SwapShop</a>?</h2>
            
            <div className='flex justify-between'>
                <div className='text-center flex flex-row'>
                    {vismis.map((prop, i) => (
                        <div key={i} className='w-[50%]'>
                            <img src={prop.img} alt='vismis'></img>
                            <h3>{prop.qs}</h3>
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
    {id: 1, img: Truck, desc: 'Fast Delivery', desc2: 'opamdagoat'},
    {id: 2, img: Deal, desc: 'Trusted Transactions', desc2: 'opamdagoat'},
    {id: 3, img: Recycle, desc: 'Help the Environment', desc2: 'opamdagoat'},
    {id: 4, img: Anytime, desc: 'Anywhere, Anytime', desc2: 'opamdagoat'},
]

const vismis = [
    {id: 5, img: Mission, qs: 'Our Mission:', ans: 'We want to to provide a platform for individuals to buy, sell, and trade their used clothes in an approach that is sustainable, convenient, and accessible.'},
    {id: 6, img: Vision, qs: 'Our Vision:', ans: 'We aspire to be the premier pre-loved fashion marketplace, promoting eco-friendly and accessible fashion for environmentally-conscious consumers seeking new and impactful fashion finds.'}
]