import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/about1.jpg';
import Ginger from '../img/ginger.jpeg';
import Jasper from '../img/jasper.JPG';
import Jullian from '../img/jullian.JPG';
import Watson from '../img/watson.JPG';

export const About = () => {

  return (
    <div className='w-full p-4'>
      <h1 className='text-4xl underline font-bold text-center p-4 text-blue-700 AboutTitle'>
        About Me
      </h1>
      <div className='w-full border-2 bg-gray-200 shadow-2xl rounded-sm p-16'>
        <div className='flex flex-row w-full py-8 border-2 border-x-0 border-t-0 border-white'>
          <div className="w-1/4">
            <img 
              src={Me} 
              alt="Leonel" 
              className='object-cover h-40 w-40 border border-gray-500 object-top rounded-full LeoImage'
            />
          </div>
          <div className='w-3/4'>
            <p className='text-2xl font-bold text-blue-700'>Leonel Enrique Barrientos Jr.</p>
            <p className='text-lg'>Birth Date: 12/18/1997</p>
            <p className=' text-lg'>Born in Queens, New York</p>
            <p className='py-1 text-lg'>Lives in Long Beach, New York</p>
            <p className='text-lg'>Graduated High School in 2015 from Long Beach High School</p>
            <p className='py-1 text-lg'>Associate Degree in Information Technology from Nassau Community College</p>
            <p className='text-lg'>Bachelors Degree in Computer Programming and Information Systems from Farmingdale State College</p>
            <p className='py-1 text-lg'>Employment: Seeking job as a Software Developer</p>
          </div>
        </div>
        <div className='p-12 border-2 border-x-0 border-t-0 border-white'>
          <h2 className="font-bold text-2xl text-blue-700">Software Development</h2>
          <p className="leading-loose indent-8">My interest in Software Development started when i first started college where i initially wanted to pursue a career as a Network Engineer. One of my favorite courses in Nassau Community College was Intro to Web Development, where i learned the basics such as HTML and CSS. Once i completed the course i realized that i had a deep interest in web Development and began doing my own research. I started developing many websites which lead to me learning more technologies that are used in software developing such as Java, Php, Python, React, and more. As a way to learn many technologies i started developing more complex projects, which many are displayed in the projects section of the site. I have learned a lot through my own research, Udemy, youtube, and college.</p>
        </div>
        <div className='p-12 border-2 border-x-0 border-t-0 border-white gym'>
          <h2 className="font-bold text-2xl text-blue-700 gymTitle">Gym Motivation</h2>
          <p className="leading-loose indent-8">One of my favorite hobbies is Powerlifing or "Picks things up & Put them Down". My fitness journey started a long time ago when i was in high school, where i had to hit the gym due to my obesity my entire childhood.
            When i was 16 years old, i was diagnosed with pre-diabetic due my obsesity where i was weighing over 250 pounds.
            I recall the fear in my mother eyes which made me cry due to the fear. I started trying to lose weight on my own with a lot of cardio and bad dieting for which i was not eating at all.
            I can say it worked for which i loss over 100 pounds by the time i graduated high school but i still was living an unhealthy lifestyle due not eating at all.
            This is when i started trying to now gain muscle by lifting weights for which i trully enjoyed powerlfinting because it was challenging and i was able to have a balanced diet.
            I have been powerlifiting more than 8 years now and my advice to anyone would be eat healty, have fun, train hard, and stay consistent.
          </p>
          <h1 className="font-semibold text-xl underline">My Personal Records</h1>
          <span className="text-gray-600 text-xs">Click on the numbers to view the lift.</span>
          <ul className='flex flex-row w-full text-2xl py-4 items-center justify-evenly'>
            <li className='flex flex-col animate-bounce'>
              <span className='underline font-bold'>Bench</span>
              <a href="https://www.instagram.com/p/CNQpsgFg0G3/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                340 Lbs.
              </a>
            </li>
            <li className='flex flex-col'>
              <span className='underline font-bold'>Squat</span>
              <a href="https://www.instagram.com/p/B95ik2zgVkj/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                525 Lbs.
              </a>
            </li>
            <li className='flex flex-col motion-safe:animate-bounce'>
              <span className='underline font-bold'>Deadlift</span>
              <a href="https://www.instagram.com/tv/CaGDqE-J-iT/?utm_source=ig_web_copy_link" className="text-blue-700 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer">
                650 Lbs.
              </a>
            </li>
          </ul>
          <p className='py-4'>If you want more advice feel free to contact me through the 
            <Link to="/contact" className='underline text-blue-500 hover:text-blue-800'> contact page</Link>.</p>
        </div>
        <div className='p-12'> 
          <h2 className="font-bold text-3xl pb-6 text-blue-700 underline">My Pets</h2>
          <ul className="flex flex-row justify-around w-full text-2xl font-bold text-gray-700">
            <li>Ginger</li>
            <li>Jasper</li>
            <li>Jullian</li>
            <li>Watson</li>
          </ul>
          <div className="flex flex-row justify-evenly w-full py-4">
              <img src={Ginger} alt="Ginger" className="rounded-full object-cover h-52 w-52 bg-gray-300 p-6 shadow-xl" />
              <img src={Jasper} alt="Ginger" className="rounded-full object-cover h-52 w-52 bg-gray-300 p-6 shadow-xl" />
              <img src={Jullian} alt="Ginger" className="rounded-full object-cover h-52 w-52 bg-gray-300 p-6 shadow-xl" />
              <img src={Watson} alt="Ginger" className="rounded-full object-cover h-52 w-52 bg-gray-300 p-6 shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
