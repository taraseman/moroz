import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = (
  { text, buttonText, buttonColor: color, date, img },
) => (
  <div className="comment">
    <div className="comment__top">
      <img
        src={img}
        alt="people"
        className="comment__top__img"
      />
      <p className="comment__top__text">{text}</p>
    </div>
    <div className="comment__bottom">
      <button
        type="button"
        className="comment__bottom__button"
        style={{
          backgroundColor: color,
        }}
      >
        {buttonText}
      </button>
      <p className="comment__bottom__date">
        {date}
      </p>
    </div>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
