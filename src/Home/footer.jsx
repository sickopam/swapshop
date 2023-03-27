import React from 'react'

import Truck from '../images/footer/truck.svg'
import Deal from '../images/footer/deal.svg'
import Recycle from '../images/footer/recycle.svg'
import Anytime from '../images/footer/247.svg'

export default function Footer() {
  return (
    <div className='bg-[#ede3d2] py-24 px-[21rem] text-center'>
        <div className='space-y-10'>
            <h2 className='text-2xl font-semibold'>Why choose <a className='text-[#4682b4]'>SwapShop</a>?</h2>
            
            <p>SwapShop provides a seamless and user-friendly platform for buying and selling pre-owned clothing, making it easy to declutter your closet and earn extra cash while also contributing to a more sustainable fashion industry.</p>

            <div className='flex flex-row justify-between'>
                {foot.map((e, i) => (
                    <div className='grid place-items-center'>
                        <img className='pb-3' key={i} src={e.img}></img>
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
