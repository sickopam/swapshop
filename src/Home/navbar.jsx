import React from 'react'
import Logo from '../images/mainlogo.svg'

const Navbar = () => {
  return (
    <div id='container' className='flex flex-row justify-between'>
        <img className='w-[20%]' src={Logo} alt='Logo'></img>
        <ul className='flex justify-evenly space-x-16'>
            {menu.map((items, i) => (
                <li className='grid items-center hover:underline' key={i}>{items.nav}</li>
            ))}
        </ul>
        <div className='flex flex-row space-x-8'>
            <button className='hover:underline'>Login</button>
            <div className='grid items-center'>
                <button id='regis'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

const menu = [
    {id: 1, nav: 'Home'},
    {id: 2, nav: 'Categories'},
    {id: 3, nav: 'Payment'},
    {id: 4, nav: 'Deliveries'}
]