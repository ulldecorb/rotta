/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../4-Header';
import './theme-detail.css';

const ThemesDetail = () => (
  <>
    <div className="theme-detail">
      <Header />
      <div className="box-detail">
        <h2 className="box-detail__title">
          THEME DETAIL
        </h2>
        <div className="box-detail__description">
          <p className="box-detail__input-test">Input rigth here</p>
          <input
            type="text"
            className="box-detail__input"
            placeholder="Enter description"
          />
        </div>
        <div className="box-detail__description">
          <p className="box-detail__input-test">description</p>
          <input
            type="text"
            className="box-detail__input"
            placeholder="Enter description"
          />
        </div>
        <div className="box-detail__description">
          <p className="box-detail__input-test">notes/abouts of</p>
          <input
            type="text"
            className="box-detail__input"
            placeholder="Enter description"
          />
        </div>
        <div className="links-box">
          <div className="links-box__link">
            <h3>link title</h3>
            <div className="links-box__link-button">
              url title
            </div>
            <img
              src="https://image.flaticon.com/icons/png/512/817/817808.png"
              alt="whould wide world"
              className="links-box__image"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ThemesDetail;
