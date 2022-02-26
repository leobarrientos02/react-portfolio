import React, { useEffect, useState } from 'react';
import { FaGithubSquare} from 'react-icons/fa';
import {projectData} from '../Projects/index';
import { motion, AnimatePresence } from 'framer-motion';

import Filter from './Filter';
import Loading from './Loading';
export const Project = () => {

  const [Projects, setProjects] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [activeType, setActiveType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  },[]);

  const fetchProject = () =>{
    let projects = [];
    projects = [...projectData];
    setProjects(projects);
    setFiltered(projects);
    setIsLoading(false);
  }

  return (
    <div className='projects-page'>
      <h1 className='text-center w-full text-4xl font-bold text-gray-900'>My Projects Section</h1>
      <Filter Projects={Projects} setFiltered={setFiltered} setActiveType={setActiveType} activeType={activeType} />
      {isLoading && (
        <Loading />
      )}
      {activeType === "React" &&(
        <div className="filterType">
          React
        </div>
      )}
      {activeType === "Javascript" &&(
        <div className="filterType">
          JavaScript
        </div>        
      )}
      {activeType === "UX/UI" &&(
        <div className="filterType">
          UX/UI
        </div>
      )}
      {activeType === "" &&(
        <div className="filterType">
          All
        </div>        
      )}
      <motion.div layout className='project-section w-full px-10 pb-10'>
        <AnimatePresence>
          {Filtered.map((project, index) => (
            <motion.div 
              layout 
              animate={{opacity: 1}} 
              initial={{opacity: 0}} 
              exit={{opacity: 0}}
              transition={{duration: 1.3}}  
              className='project border border-gray-200 p-2 rounded-xl shadow-xl shadow-blue-200 hover:shadow-blue-300 h-80' 
              key={index}
            >
              <a href={project.link} title={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.name} loading="lazy" className='object-cover h-1/2 w-full rounded-xl rounded-b-none border-2 border-blue-100 hover:border-blue-200'/>
                <h2 className='text-2xl p-2 font-bold text-center hover:underline'>{project.name}</h2>
              </a>
              <div className='px-4'>
                <p className='text-gray-700 text-sm cursor-none'>
                  {project.description}
                </p>
                <div className='project-techLink flex items-center justify-between'>
                  <p className="Project-Link text-xl font-bold">{project.tech}</p>
                  <a href={project.github} target="_blank" rel="noreferrer" className='Project-Link flex py-2 items-center hover:underline'>
                    <FaGithubSquare className='text-lg' /> Github Repository
                  </a>
                </div>
              </div>  
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="w-full flex items-center justify-center">
        <span className="checkGithub text-gray-600">Check out more projects on my <a className="text-blue-800 hover:underline" href="https://github.com/leobarrientos02/" target="_blank" rel="noreferrer">Github</a></span>
      </div>
      
    </div>
  )
}
