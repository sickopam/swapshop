import React from 'react'

export default function Footer() {
  return (
    <div id='bottom-container'>
        <div className='flex justify-between'>
            <div className='w-[25%] space-y-6'>
                <h2 className='text-lg text-[#4682b4]'>SwapShop</h2>
                <p className='text-sm font-light'>Swapshop is a sustainable fashion platform that enables users to buy, sell, and trade pre-owned clothing and accessories.</p>
            </div>

            <div className='w-[75%] flex justify-evenly'>
                {footer.map((t, i) => (
                    <div key={i} className='space-y-4'>
                        <h3 className='font-semibold text-sm'>{t.title}</h3>
                        <div className='text-xs font-light space-y-2'>
                            {t.li.map((i) => (
                                <ul className='hover:underline'>{i}</ul>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='text-center pt-12 text-xs font-light'>
            <h2>Copyright 2023 • All Rights Reserved SwapShop by Gandja</h2>
        </div>
    </div>
  )
}

const footer = [
    {id: 41, title: 'Contact', li: ['About', 'Career', 'Promotion']},
    {id: 42, title: 'Overview', li: ['Product', 'Categories', 'Pricing']},
    {id: 43, title: 'Explore Us', li: ['Our Career', 'Privacy', 'Terms & Conditions']},
    {id: 44, title: 'Connect Us', li: ['support@swapshop.com', '021-555-456', 'Sudirman, South Jakarta']}
]
