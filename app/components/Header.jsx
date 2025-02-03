import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='shadow-md bg-white'>
        <nav className=' text-black items-center py-4'>
            <ul className='flex justify-center items-center gap-10'>
                <li className='font-bold text-lg'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='font-bold text-lg'>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li className='font-bold text-lg'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='font-bold text-lg'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
