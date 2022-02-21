import React, { useRef, useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/about1.jpg';
import Ginger from '../img/ginger.jpeg';
import Jasper from '../img/jasper.JPG';
import Jullian from '../img/jullian.JPG';
import Watson from '../img/watson.JPG';

import { FaUserGraduate, FaUserTie, FaUserAstronaut  } from 'react-icons/fa';

export const About = () => {

  return (
    <div className='w-full flex flex-col bg-white'>
      <h2 className="text-gray-900 text-4xl w-full text-center font-bold py-3">Get to Know Me</h2>

      {/* ABOUT ME INTRO START */}
      <div
        className="About-Intro flex flex-row items-center justify-between rounded-md p-4"
      >
        <div className="flex items-center justify-center w-2/4">
            <img src={Me} alt="Leo" className="object-cover w-72 rounded-md shadow-lg shadow-blue-200" />
        </div>
        <div className='flex w-2/4 flex-col p-4'>
          <h1 className="text-4xl font-bold text-blue-900 py-2">Leonel E. Barrientos</h1>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Personal Information<FaUserAstronaut /></h2>
            <p className='text-lg'>Birth Date: 12/18/1997</p>
            <p className=' text-lg'>Born in Queens, New York</p>
            <p className='text-lg'>Lives in Long Beach, New York</p>          
          </div>          


          <div className="py-2">
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Education<FaUserGraduate /></h2>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2015</span> Graduated High School from Long Beach High School</p>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2019</span> Associate Degree in IT from Nassau Community College</p>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2021</span> Bachelors Degree in Computer Programming and Information Systems from Farmingdale State College</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Experience<FaUserTie /></h2>
            <p className='text-lg'>Seeking job as a Software Developer</p>
            <p className="text-base text-gray-700">Help me get more experience! &#128513;</p>
          </div>
        </div>
      </div>
      {/* ABOUT ME INTRO END */}

      <div className='About-Section2 flex flex-row items-center justify-between rounded-md p-4'>

      </div>
    </div>
  )
}
