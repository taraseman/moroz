import React from 'react';
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
