import React, { useEffect, useState } from "react";
import { projectData } from "../Projects/index";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Filter from "./Filter";
import Loading from "./Loading";
export const Projects = () => {
  const [Projects, setProjects] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [activeType, setActiveType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = () => {
    let projects = [];
    projects = [...projectData];
    console.log(projects);
    setProjects(projects);
    setFiltered(projects);
    setIsLoading(false);
  };

  return (
    <div className="projects-page">
      <h1 className="text-center w-full text-4xl font-bold text-gray-900">
        My Projects Section
      </h1>
      <Filter
        Projects={Projects}
        setFiltered={setFiltered}
        setActiveType={setActiveType}
        activeType={activeType}
      />
      {isLoading && <Loading />}
      {activeType === "React" && <div className="filterType">React</div>}
      {activeType === "Javascript" && (
        <div className="filterType">JavaScript</div>
      )}
      {activeType === "UX/UI" && <div className="filterType">UX/UI</div>}
      {activeType === "System" && (
        <div className="filterType">Full Stack System</div>
      )}
      {activeType === "" && <div className="filterType">All</div>}
      <motion.div layout className="project-section w-full px-10 pb-10">
        <AnimatePresence>
          {Filtered.map((project, index) => (
            <motion.div
              // layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="project border border-gray-200 p-2 rounded-xl shadow-xl shadow-blue-200 hover:shadow-blue-300 h-80"
              key={index}
            >
              <Link to={`/projects/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="object-cover h-3/5 w-full rounded-xl rounded-b-none border-2 border-blue-100 hover:border-blue-200"
                />
                <h2 className="text-2xl p-2 font-bold text-center">
                  {project.name}
                </h2>
                <div className="px-4">
                  <p className="text-gray-700 text-sm cursor-none">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="w-full flex items-center justify-center">
        <span className="checkGithub text-gray-600">
          Check out more projects on my{" "}
          <a
            className="text-blue-800 hover:underline"
            href="https://github.com/leobarrientos02/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
      </div>
    </div>
  );
};
