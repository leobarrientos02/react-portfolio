import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/about1.jpg';
import Ginger from '../img/ginger.jpeg';
import Jasper from '../img/jasper.JPG';
import Jullian from '../img/jullian.JPG';
import Watson from '../img/watson.JPG';
import Software from '../img/AboutSoftware.png';
import Squat from '../img/Squat.png';

import {AnimationOnScroll} from 'react-animation-on-scroll';

import { FaUserGraduate, FaUserTie, FaUserAstronaut  } from 'react-icons/fa';

export const About = () => {
  return (
    <div className='About w-full flex flex-col bg-white'>
      <AnimationOnScroll offset={0} animatePreScroll={true} animateIn="animate__jello" >
        <h2 className="text-gray-900 text-4xl w-full text-center font-bold py-3">Get to Know Me</h2>
      </AnimationOnScroll>

      {/* ABOUT ME INTRO START */}
      <div className="About-Intro flex flex-row items-center justify-between rounded-md p-4">
        <div className="Img-Container flex items-center justify-center w-2/4">
            <img src={Me} alt="Leo" className="object-cover w-72 rounded-md shadow-lg shadow-blue-200" />
        </div>
        <div className='Intro-Text-Container flex w-2/4 flex-col p-4'>
          <h1 className="text-4xl font-bold text-blue-900 py-2">Leonel E. Barrientos</h1>

          <AnimationOnScroll initiallyVisible={true}  animateIn='animate__bounceInRight' animateOnce={true}>
          <div className='About-Intro-Detail'>
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Personal Information<FaUserAstronaut /></h2>
            <p className='text-lg'>Birth Date: 12/18/1997</p>
            <p className=' text-lg'>Born in Queens, New York</p>
            <p className='text-lg'>Lives in Long Beach, New York</p>          
          </div>          

          <div className="About-Intro-Detail py-2">
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Education<FaUserGraduate /></h2>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2015</span> Graduated High School from Long Beach High School</p>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2019</span> Associate Degree in IT from Nassau Community College</p>
            <p className='text-lg'><span className="text-blue-900 font-semibold">2021</span> Bachelors Degree in Computer Programming and Information Systems from Farmingdale State College</p>
          </div>

          <div className='About-Intro-Detail'>
            <h2 className="text-2xl font-semibold text-gray-900 flex flex-row items-center">Experience<FaUserTie /></h2>
            <p className='text-lg'>Seeking job as a Software Developer</p>
            <p className="text-base text-gray-700">Help me get more experience! &#128513;</p>
          </div>
          </AnimationOnScroll>
        </div>
      </div>
      {/* ABOUT ME INTRO END */}

      {/*  Software Developer */}
      <div className='About-Section flex flex-col rounded-md p-4 bg-blue-100'>
        <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
          <h1 className="text-5xl font-bold w-full text-left p-2">Why I love Software Development?</h1>
        </AnimationOnScroll>
        <div className='flex flex-row p-4'>
          <AnimationOnScroll animateIn='animate__backInUp' className='flex flex-col w-1/2'>
            <p className=" indent-8 text-gray-900 text-lg font-medium leading-loose">My interest in Software Development started when i first started college where i initially wanted to pursue a career as a Network Engineer. One of my favorite courses in Nassau Community College was Intro to Web Development, where i learned the basics such as HTML and CSS. Once i completed the course i realized that i had a deep interest in web Development and began doing my own research. I started developing many websites which lead to me learning more technologies that are used in software developing such as Java, Php, Python, React, and more. As a way to learn many technologies i started developing more complex projects, which many are displayed in the projects section of the site. I have learned a lot through my own research, Udemy, youtube, and college.</p>
          </AnimationOnScroll>
          <AnimationOnScroll className='flex items-start justify-center w-1/2 h-full'animateIn='animate__bounceInRight' animateOut='animate__zoomOutLeft'>
              <img src={Software} alt="Coding" className="h-3/4"/>
          </AnimationOnScroll>       
          </div>
      </div>
       {/*  Software Developer Ends*/}

      {/* Fitness */}
      <div className='About-Gym flex flex-col rounded-md p-4'>
        <h1 className="w-full text-left text-5xl font-bold p-2 text-blue-800">Health & Fitness</h1>
   
        <div className="flex flex-row items-center justify-between">
          <AnimationOnScroll animateIn='animate__fadeInLeft' className="flex w-1/2 flex-col p-8">
            <img src={Squat} alt="Squat" />
            <h1 className="font-semibold text-xl">My Personal Records</h1>
          <span className="text-gray-600 text-xs">Click on the numbers to view the lift.</span>
          <ul className='flex flex-row w-full text-2xl py-4'>
            <li className='flex flex-col'>
              <span className='underline font-bold'>Bench</span>
              <a href="https://www.instagram.com/p/CNQpsgFg0G3/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                340 Lbs.
              </a>
            </li>
            <li className='flex flex-col px-6'>
              <span className='underline font-bold'>Squat</span>
              <a href="https://www.instagram.com/p/B95ik2zgVkj/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                525 Lbs.
              </a>
            </li>
            <li className='flex flex-col'>
              <span className='underline font-bold'>Deadlift</span>
              <a href="https://www.instagram.com/tv/CaGDqE-J-iT/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                650 Lbs.
              </a>
            </li>
          </ul>
          </AnimationOnScroll>
          <div className="flex w-1/2 p-2">
            <AnimationOnScroll animateIn='animate__flipInY' className=" indent-8 text-gray-900 text-lg font-medium leading-loose">One of my favorite hobbies is Powerlifing or "Picks things up & Put them Down". My fitness journey started a long time ago when i was in high school, where i had to hit the gym due to my obesity my entire childhood.
                When i was 16 years old, i was diagnosed with pre-diabetic due my obsesity where i was weighing over 250 pounds.
                I recall the fear in my mother eyes which made me cry due to the fear. I started trying to lose weight on my own with a lot of cardio and bad dieting for which i was not eating at all.
                I can say it worked for which i loss over 100 pounds by the time i graduated high school but i still was living an unhealthy lifestyle due not eating at all.
                This is when i started trying to now gain muscle by lifting weights for which i trully enjoyed powerlfinting because it was challenging and i was able to have a balanced diet.
                I have been powerlifting more than 8 years now and my advice to anyone would be eat healty, have fun, train hard, and stay consistent.
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      {/*  Fitness Ends*/}
      
      {/*  Pets */}
      <div className='About-Section flex flex-row items-center  rounded-md bg-blue-100'>
        <div className='flex flex-col items-start justify-center w-1/2 h-full'>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__zoomOut'>
              <h2 className="text-6xl font-bold p-7 bg-white w-full">My Loving Pets &#10084;</h2>
          </AnimationOnScroll>
        </div>
        <div className='PetsGrid w-1/2'>
          
            
              <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className="text-5xl font-bold text-gray-800 p-4">Jasper</h2>
                  <img src={Jasper} alt="Jasper" className="rounded-full w-40 h-40 object-cover border-2 border-white shadow-xl shadow-orange-300" /> 
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className="text-5xl font-bold text-gray-800 p-4">Ginger</h2>
                  <img src={Ginger} alt="Ginger" className="rounded-full w-40 h-40 object-cover border-2 border-white shadow-lg shadow-purple-300" /> 
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
              <div className='flex flex-col items-center justify-center'>
                <h2 className="text-5xl font-bold text-gray-800 p-4">Jullian</h2>
                <img src={Jullian} alt="Jullian" className="rounded-full w-40 h-40 object-cover border-2 border-white shadow-lg shadow-gray-400" />  
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='animate__rotateIn' animateOut='animate__zoomOut'>
              <div className='flex flex-col items-center justify-center'>
                  <h2 className="text-5xl font-bold text-gray-800 p-4">Watson</h2>
                  <img src={Watson} alt="Jasper" className="rounded-full w-40 h-40 object-cover border-2 border-white shadow-lg shadow-gray-500" />
              </div>
          </AnimationOnScroll>
        </div>
      </div>
       {/*  Pets Ends*/}    
    </div>
  )
}
