import React from 'react';
import { FaGithubSquare} from 'react-icons/fa';
import {projectData} from '../Projects/index';
import { motion } from 'framer-motion';

export const Project = () => {
  
  const fadeIn = {
    hidden:{
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    }
  };

  return (
    <div className='projects-page'>
      <h1 className='text-center w-full text-4xl font-bold text-gray-900'>My Projects Section</h1>
      <div className='project-section w-full p-10'>
        {projectData.map((project, index) => (
          <motion.div variants={ fadeIn } initial='hidden' animate='show' className='project border border-gray-200 p-2 rounded-xl shadow-xl shadow-blue-200 hover:shadow-blue-300 h-80' key={index}>
            <ul className='techlist' onClick={()=>{
                  var element = document.querySelector('.techlist');
                  element.classList.toggle("open");
            }}>
              <li className="font-medium underline px-4">Tech</li>
              {project?.technology.map((tech)=> (
                <li className='tech cursor-none'>{tech}</li>
              ))}
            </ul>
            <a href={project.link} title={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.name} className='object-cover h-1/2 w-full rounded-xl rounded-b-none'/>
              <h2 className='text-2xl p-2 font-bold text-center'>{project.name}</h2>
            </a>
            <div className='px-4'>
              <p className='text-gray-700 text-sm cursor-pointer'>
                {project.description}
              </p>
              <div className='flex items-center justify-between'>
                <a href={project.github} target="_blank" rel="noreferrer" className='flex py-2 items-center text-blue-900'>
                  <FaGithubSquare className='text-lg' /> Github Repository
                </a>
              </div>
            </div>  
          </motion.div>
        ))}
      </div>
    </div>
  )
}
