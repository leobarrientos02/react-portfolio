import React from 'react';
// import Splash from '../img/splash.svg';
import { FiPhoneCall, FiMail } from 'react-icons/fi';

export const Contact = () => {

  return (
    <div className="contact w-full flex flex-col items-center">
      {/* <img src={Splash} alt="Splash" className='splash' /> */}
      <h2 className="w-full text-4xl py-2 text-gray-900 font-bold text-center">Don't be Shy, Contact Me</h2>
      <div className='w-2/3 flex py-2 flex-row items-center justify-evenly'>
        <div className="flex flex-row items-center p-3 mx-2 border rounded-md bg-gray-200 shadow-xl shadow-red-200">
          <FiMail className='text-3xl text-red-400' /><span className="text-lg px-2 text-gray-700">leobarrientos02@gmail.com</span>
        </div>
        <div className="text-blue-500 flex flex-row items-center p-3 border rounded-md bg-gray-200 shadow-xl shadow-blue-200">
          <FiPhoneCall className='text-3xl' /><span className="text-lg px-2 text-gray-700">(516)-960-8086</span>
        </div>
      </div>
      <form action="https://formspree.io/f/xjvjonpb" method="POST" className='form w-full flex flex-col p-4 items-center'>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          placeholder='Enter Name'
          autoComplete='off'
          className='NameInput w-1/2 p-2 bg-blue-100 text-lg text-gray-600 rounded-md shadow-md shadow-gray-300 outline-none'
        />
        <input 
          type="email" 
          name="_replyto"
          id="email" 
          required
          placeholder='Enter Email'
          className='input w-1/2 p-2 bg-blue-100 text-lg text-gray-600 rounded-md shadow-md shadow-gray-300 my-4 outline-none'
        />
        <textarea 
          name="message" 
          id="message" 
          placeholder='Enter Message'
          rows="4"
          className='w-1/2 p-2 bg-blue-100 text-base text-gray-600 font-mono rounded-md shadow-md shadow-gray-300 outline-none resize-none'
          >
        </textarea>
        <button type="submit" className="text-sm font-bold rounded-lg bg-purple-800 text-white px-8 py-2 my-4 hover:bg-purple-900">Send Message</button>
      </form>
    </div>
  )
}
