import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className='bg-gray-900 text-white p-4'>
            <ul className='flex justify-evenly'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}
