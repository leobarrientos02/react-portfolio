import React, {useState} from 'react'
import { FaGithubSquare} from 'react-icons/fa';
import {projectData} from '../Projects/index';


export const Project = () => {
  const [projectsData, setProjectsData] = useState(projectData);

  return (
    <div className='projects-page'>
      <h1 className='text-center w-full text-3xl font-bold underline'>My Projects Section</h1>
      <div className='w-full p-10 grid grid-cols-3 gap-x-16 gap-y-15'>
        {projectsData.map((project, index) => (
          <div className='border border-gray-300 p-2 rounded-xl shadow-xl hover:shadow-blue-300 h-80'>
            <a href={project.link} title={project.link} target="_blank" rel="noreferrer" key={index}>
              <img src={project.image} alt={project.name} className='object-cover h-1/2 w-full rounded-xl rounded-b-none'/>
              <h2 className='text-2xl p-2 font-bold text-center'>{project.name}</h2>
            </a>
            <div className='px-4'>
              <p className='text-gray-700 text-sm'>
                {project.description}
              </p>
              <div className='flex items-center justify-between'>
                <a href={project.github} target="_blank" rel="noreferrer" className='flex py-2 items-center text-blue-900'>
                  <FaGithubSquare className='text-lg' /> Github Repository
                </a>
              </div>
            </div>  
          </div>
        ))}
      </div>
    </div>
  )
}
