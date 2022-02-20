import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return (
    <div className='flex flex-wrap w-2/4 p-4 items-center justify-between border-t border-gray-200'>
        <Link to="/" className='flex items-center text-2xl w-1/4'>
            <div className='flex flex-row items-center'>
                <FaCode className='bg-gray-200 mx-1 rounded-full shadow-lg shadow-blue-300 text-blue-800' /><span className='font-bold'>Portfolio</span>
            </div>
        </Link>
        <ul className='flex flex-row justify-around items-center w-3/4 text-2xl'>
            <li className='cursor-pointer hover:underline' id='project'>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </li>
            <li className='cursor-pointer hover:underline' id='about'>
                <NavLink to='/about'>
                    About Me
                </NavLink>
            </li>
            <li className='cursor-pointer hover:underline' id='contact'>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
