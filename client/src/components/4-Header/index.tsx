/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadProjects } from '../../redux/actions/actionCreators';
import Projects from '../../types/projects.model';
import LogoutButton from '../01-Logout';
import './header.css';

type HeaderProps = {
    projects: Projects [],
    dispatch: any,
}

const Header: FC<HeaderProps> = ({ projects, dispatch }) => {
  useEffect(() => {
    dispatch(loadProjects());
  }, []);

  const { projectTitle } = useParams<{projectTitle: string}>();

  return (
    <div className="navbar">
      {
        projects && projects.filter((x) => x.title === projectTitle).map((x: Projects) => (
          <h1 className="navbar__main-title-box">
            <Link
              className="navbar__title"
              to="projects"
            >
              {x.title}
            </Link>
          </h1>
        ))
      }
      <LogoutButton />
      <Link
        className="navbar__search"
        to="search"
      >
        <img
          src="https://img.icons8.com/metro/452/search.png"
          alt="search icon"
          className="navbar__search-icon"
        />
      </Link>
    </div>
  );
};

function mapStateToProps(store:any) {
  return { projects: store.projects };
}

export default connect(mapStateToProps)(Header);
