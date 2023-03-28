import React from 'react'

import Shoe from '../images/trending/shoe.svg'
import Hoodie from '../images/trending/hoodie.svg'
import Watch from '../images/trending/watch.svg'

export default function Trend() {
  return (
    <div className='py-24'>
        <h1 className='text-center text-2xl font-semibold pb-10'>Hottest Items</h1>
        <div className='flex justify-evenly'>
            {items.map((t, i) => (
                <div key={i} className='space-y-5'>
                    <img src={t.img} alt='hot items' className='hover:scale-[105%] duration-300'/>
                    <div className='text-center'>
                        <h2 className='font-semibold'>{t.title}</h2>
                        <h3>{t.desc}</h3>
                        <p className='italic'>{t.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const items = [
    {id: 31, img: Shoe, title: 'Nike Air Max 1', desc: 'Perfect Condition', price:'Rp.650,000'},
    {id: 32, img: Hoodie, title: 'White Uniqlo Hoodie', desc: 'Worn Once', price: 'Rp.125,000'},
    {id: 33, img: Watch, title: 'Casio Digital Watch', desc: 'Slight Scratches', price: 'Rp.80,000'}
]