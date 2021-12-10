/* eslint-disable react/prop-types */
import React, { useState, useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProjects, addProject, deleteProject } from '../../redux/actions/actionCreators';
import Projects from '../../types/projects.model';
import './projectsBoard.css';

type ProjectsProps = {
    projects : Projects [],
    dispatch: any,
}

const ProjectsBoard: FC<ProjectsProps> = ({ projects, dispatch }) => {
  const [projectName, setProjectName] = useState('');
  useEffect(() => {
    dispatch(loadProjects());
  }, [projects.length]);

  return (
    <div className="projects">
      <h2 className="projects__title">PROJECTS</h2>
      <div className="projects__backgound" />
      <ul className="projects__list">
        {projects.map((project: Projects) => (
          <li className="list">
            <Link
              to={`${project.title}`}
              className="list__title"
            >
              {project.title}
            </Link>
            <button
              type="button"
              className="list__delete-button"
              onClick={() => dispatch(deleteProject(project._id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Create new project"
        id="newProject"
        className="projects__input"
        value={projectName}
        onChange={
          (event: React.FormEvent<HTMLInputElement>) => setProjectName(event.currentTarget.value)
        }
      />
      <button
        type="button"
        className="projects__add-button"
        onClick={() => {
          const pro: Projects = {
            title: projectName,
            icon: 'string',
            creator: {
              user: 'string',
              date: 'string'
            },
            crew: [{
              user: 'string',
              mail: 'string',
              img: 'string'
            }]
          };
          dispatch(addProject(pro));
          setProjectName('');
        }}
      >
        Add New Project
      </button>
      <p className="projects__intruccions">
        Select or create a project
      </p>
    </div>
  );
};

function mapStateToProps(store:any) {
  return { projects: store.projects };
}

export default connect(mapStateToProps)(ProjectsBoard);
