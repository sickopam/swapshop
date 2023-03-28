import React from 'react'
import Ceo from '../images/team/ceo.svg'
import Cofounder from '../images/team/cofounder.jpeg'
import LeBron from '../images/team/lebron.jpeg'
import Marketing from '../images/team/johnny.jpeg'

export default function Team() {
  return (
    <div className='py-8 px-64 bg-[#dcf3f0]'>
        <h1 className='font-semibold text-2xl text-center pb-8'>Meet Our <span className='text-[#4682b4]'>Team</span>!</h1>
        <div className='grid grid-cols-2 gap-y-8 place-items-center'>
            {faces.map((ppl, i) => (
                <div key={i} className='space-y-3'>
                        <img id='faces' src={ppl.face} alt='team'/>
                        <div className='text-center'>
                            <h2 className='font-semibold'>{ppl.name}</h2>
                            <h3>{ppl.pos}</h3>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}

const faces = [
    {id: 11, face: Ceo, name: 'Jack White', pos: 'CEO & Founder'},
    {id: 12, face: Cofounder, name: 'Brian Smith', pos: 'Co-Founder'},
    {id: 13, face: LeBron, name: 'LeBron James', pos: 'LeBalls'},
    {id: 14, face: Marketing, name: 'Jack Brown', pos: 'Marketing'},
]
