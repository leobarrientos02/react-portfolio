import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    return (
    <div className='flex flex-wrap w-2/4 p-8 items-center justify-between border-t border-gray-200'>
        <Link to="/" className='flex items-center text-2xl w-1/4 font-bold'>
            <div className='flex flex-row items-center'>
                <FaCode className='text-blue-600' /> Portfolio
            </div>
        </Link>
        <ul className='flex flex-row justify-around items-center w-3/4 text-xl'>
            <li className='cursor-pointer hover:underline'>
                <NavLink to='/projects'>
                    Projects
                </NavLink>
            </li>
            <li className='cursor-pointer hover:underline'>
                <NavLink to='/about'>
                    About Me
                </NavLink>
            </li>
            <li className='cursor-pointer hover:underline'>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
