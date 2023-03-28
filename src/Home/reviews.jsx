import React from 'react'

import Customer from '../images/review/cust.svg'

export default function Reviews() {
  return (
    <div className='py-12 px-10 pb-16 bg-[#dcf3f0]'>
        <h1 className='text-center text-2xl pb-14 font-semibold'>What Our Customers Say</h1>
        <div className='flex justify-between'>
            {review.map((c, i) => (
                <div key={i} className='w-[30%] space-y-8'>
                    <div className='flex justify-center'>
                        <img src={c.img} alt='customer'/>
                    </div>
                    <p className='text-center text-sm'>{c.comment}</p>                    
                </div>
            ))}
        </div>
    </div>
  )
}

const review = [
    {id: 21, img: Customer, comment: '"I love Swapshop! As someone who is passionate about sustainable fashion, Im always on the lookout for ways to reduce my carbon footprint. Swapshop allows me to sell my pre-loved clothes and buy unique pieces from other fashion enthusiasts. Its a win-win situation for me and the environment!"'},
    {id: 21, img: Customer, comment: '"Im so glad I discovered Swapshop. Ive been able to find pieces of clothing that I wouldnt have been able to afford otherwise. Plus, I feel good knowing that Im contributing to a more sustainable future by buying and selling pre-loved clothes."'},
    {id: 21, img: Customer, comment: '"I recently used Swapshop to sell some clothes that I no longer wear, and it was such an easy and hassle-free process. I just uploaded some pictures and descriptions of my items, and before I knew it, they were sold! I also love that I can connect with other fashion enthusiasts and swap items if Im not looking to make a profit."'}
]
