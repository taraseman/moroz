import React from 'react';
import PropTypes from 'prop-types';

import './PhoneRating.scss';

export const PhoneRating = ({ title, number, percent, color }) => (
  <div className="phone-rating">
    <div className="phone-rating__text">
      <p className="phone-rating__left-text">
        <span className="phone-rating__left-text__n">1.</span>
        {title}
      </p>
      <p className="phone-rating__right-text">{number}</p>
    </div>
    <div className="phone-rating__wrapper">
      <div className="phone-rating__rating">
        <div
          className="phone-rating__line"
          style={{
            width: percent,
            backgroundColor: color,
          }}
        >
          {' '}
        </div>
      </div>
    </div>
  </div>
);

PhoneRating.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
