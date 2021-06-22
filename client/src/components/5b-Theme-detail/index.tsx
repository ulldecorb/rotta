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
          <input
            type="text"
            className="box-detail__input"
            placeholder="Enter description"
          />
        </div>
      </div>
    </div>
  </>
);

export default ThemesDetail;
