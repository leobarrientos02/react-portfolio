import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/about1.jpg';
import Ginger from '../img/ginger.jpeg';
import Jasper from '../img/jasper.JPG';
import Jullian from '../img/jullian.JPG';
import Watson from '../img/watson.JPG';


import {AnimationOnScroll} from 'react-animation-on-scroll';

import { FaUserGraduate, FaUserTie, FaUserAstronaut  } from 'react-icons/fa';

export const About = () => {
  return (
    <div className='w-full flex flex-col bg-white'>
      <AnimationOnScroll offset={0} animateIn="animate__rubberBand" >
        <h2 className="text-gray-900 text-4xl w-full text-center font-bold py-3">Get to Know Me</h2>
      </AnimationOnScroll>

      {/* ABOUT ME INTRO START */}
      <div
        className="About-Intro flex flex-row items-center justify-between rounded-md p-4"
      >
        <div className="flex items-center justify-center w-2/4">
            <img src={Me} alt="Leo" className="object-cover w-72 rounded-md shadow-lg shadow-blue-200" />
        </div>
        <div className='flex w-2/4 flex-col p-4'>
          <h1 className="text-4xl font-bold text-blue-900 py-2">Leonel E. Barrientos</h1>

          <AnimationOnScroll initiallyVisible={true} animateOut='animate__bounceOutRight' animateIn='animate__bounceInRight'>
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
          </AnimationOnScroll>
        </div>
      </div>
      {/* ABOUT ME INTRO END */}

      {/*  Software Developer */}
      <div className='About-Section flex flex-row items-center justify-between rounded-md p-4'>

      </div>
       {/*  Software Developer Ends*/}

      {/* Fitness */}
      <div className='About-Section flex flex-row items-center justify-between rounded-md p-4'>

      </div>
      {/*  Fitness Ends*/}
      
      {/*  Pets */}
      <div className='About-Section flex flex-row items-center justify-between rounded-md bg-red-600'>
        <div className='flex flex-col items-start w-1/2'>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__zoomOut'>>
              <h2 className="text-5xl font-bold p-7 bg-white w-full">My Loving Pets &#10084;</h2>
          </AnimationOnScroll>
        </div>
        <div className='PetsGrid w-1/2'>
          
            <div className='flex flex-col items-center justify-center'>
              <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
                <h2 className="text-5xl font-bold text-white p-4">Jasper</h2>
                <img src={Jasper} alt="Jasper" className="rounded-full w-40 h-40 object-cover border-2 border-white" /> 
              </AnimationOnScroll>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
                <h2 className="text-5xl font-bold text-white p-4">Ginger</h2>
                <img src={Ginger} alt="Ginger" className="rounded-full w-40 h-40 object-cover border-2 border-white" /> 
              </AnimationOnScroll>
            </div>

          <div className='flex flex-col items-center justify-center'>
            <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
              <h2 className="text-5xl font-bold text-white p-4">Jullian</h2>
              <img src={Jullian} alt="Jullian" className="rounded-full w-40 h-40 object-cover border-2 border-white" /> 
            </AnimationOnScroll>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
              <h2 className="text-5xl font-bold text-white p-4">Watson</h2>
              <img src={Watson} alt="Jasper" className="rounded-full w-40 h-40 object-cover border-2 border-white" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
       {/*  Pets Ends*/}    
    </div>
  )
}
