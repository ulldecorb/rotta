/* eslint-disable react/prop-types */
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadLessons } from '../../redux/actions/actionCreators';
import Lessons from '../../types/lessons.model';
import './lessons.css';

type LessonsProps = {
    lessons: Lessons [],
    dispatch: any,
    themeTitle: String,
}

const LessonsCard: FC<LessonsProps> = ({ themeTitle, lessons, dispatch }) => {
  useEffect(() => {
    dispatch(loadLessons());
  }, []);

  const { projectTitle } = useParams<{ projectTitle: string }>();

  const currentLesson = lessons
    && lessons.filter((lesson) => projectTitle === lesson.project && themeTitle === lesson.theme);
  return (
    <div className="lesson-box">
      { lessons && currentLesson.map(
        (lesson: Lessons) => (
          <div className="lessons">
            <img src={lesson.icon} alt="lesson" className="lessons__image" />
            <h3 className="lessons__title">
              {lesson.title}
            </h3>
          </div>
        )
      )}
    </div>
  );
};

function mapStateToProps(store: any) {
  return { lessons: store.lessons };
}

export default connect(mapStateToProps)(LessonsCard);
