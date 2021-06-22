/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { loadThemes } from '../../redux/actions/actionCreators';
import Themes from '../../types/themes.model';
import LessonsCard from '../6-Lessons';
import './themes.css';

type ThemeProps = {
    themes: Themes[],
    dispatch: any,
}

const ThemesCard: FC<ThemeProps> = ({ themes, dispatch }) => {
  useEffect(() => {
    dispatch(loadThemes());
  }, []);

  const { projectTitle } = useParams<{projectTitle: string}>();

  const currenProject = themes.filter((theme) => theme.project === projectTitle);

  return (
    <div className="themes-box">
      { themes && currenProject.map(
        (x) => (
          <>
            <div className="themes-box__combined-theme-and-lesson-box">
              <div
                className="themes"
              >
                <img src={x.icon} alt="themes" className="themes__image" />
                <h2 className="themes__title">
                  {x.title}
                </h2>
                <Link
                  to={`${projectTitle}/${x.title}`}
                  className="themes__setup"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_167873.png"
                    alt="configure theme card"
                    className="themes__setup-image"
                  />
                </Link>
              </div>
              <LessonsCard themeTitle={x.title} />
            </div>
          </>
        )
      )}
    </div>
  );
};

function mapStateToProps(store: any) {
  return {
    themes: store.themes
  };
}

export default connect(mapStateToProps)(ThemesCard);
