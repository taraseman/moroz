import React from 'react';
import PropTypes from 'prop-types';

import './RatingBox.scss';

export const RatingBox = ({ color, title, number, text, progress }) => (
  <div
    className="rating-box"
    style={{
      backgroundColor: color,
    }}
  >
    <h3 className="rating-box__title">{title}</h3>
    <p className="rating-box__content">
      <span className="rating-box__number">{number}</span>
      {text}
    </p>
    <div className="rating-box__rating">
      <div
        className="rating-box__line"
        style={{
          width: progress,
        }}
      >
        {' '}
      </div>
    </div>
  </div>
);

RatingBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};
