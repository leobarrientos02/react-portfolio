import React, { useEffect, useState } from "react";
import { projectData } from "../Projects/index";
import { useParams } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { Error } from "./Error";

export const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchProject();
  }, []);

  let { projectId } = useParams();

  const fetchProject = () => {
    let projects = [];
    projects = [...projectData];
    setProject(projects[projectId]);
    console.log(projects[projectId]);
  };

  return (
    <>
      {project ? (
        <div className="project-page">
          <div className="project-page-title">
            <h2>{project?.name}</h2>
          </div>
          <div className="project-page-info">
            <motion.img
              src={project?.image}
              alt={project?.name}
              className="shadow-xl shadow-blue-200 hover:shadow-blue-300"
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: "-100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="project-detail"
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="project-description">
                <span className="project-techstack">Description:</span>{" "}
                {project?.description}
              </p>
              <p className="project-techstack">Tech Stack:</p>
              <ul className="project-tech">
                {project?.technology?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
              <div className="project-links">
                <p className="project-techstack">Links:</p>
                <div className="github">
                  <FaGithubSquare color="#154353" />
                  <a
                    href={project.github}
                    className="cursor-pointer hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="link">
                  <BsLink45Deg color="#154353" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};
