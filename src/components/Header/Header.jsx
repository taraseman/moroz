import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ContextActiveMesagges } from '../ContextActiveMessages';

import search from '../../images/header/search.png';
import bell from '../../images/header/bell.png';

import './Header.scss';

export const Header = ({ isNavVisible, setNavVisibility }) => {
  const { numberOfMessages } = useContext(ContextActiveMesagges);
  const [messageNumber, setMessageNumber] = useState(numberOfMessages);

  useEffect(() => {
    setMessageNumber(numberOfMessages);
  }, [numberOfMessages]);

  return (
    <header className="header">
      {isNavVisible
        ? (
          <div className="header__nav">
            <h2 className="header__nav__title">Moroz Dmytro</h2>
            <button
              type="button"
              className="header__nav__burger"
              onClick={() => setNavVisibility(false)}
            >
              <div className="header__burger-line">{' '}</div>
              <div className="header__burger-line">{' '}</div>
              <div className="header__burger-line">{' '}</div>
            </button>
          </div>
        ) : (
          <div className="header__left-box">
            <button
              type="button"
              className="header__burger-button"
              onClick={() => setNavVisibility(true)}
            >
              <div className="header__burger-line">{' '}</div>
              <div className="header__burger-line">{' '}</div>
              <div className="header__burger-line">{' '}</div>
            </button>
          </div>
        )
      }
      <div
        className={
          classNames('header__main', { 'header__main--small': isNavVisible })}
      >
        <div className="header__main__left-box left-box">
          <input
            type="text"
            id="text"
            placeholder="Search"
            className="left-box__input"
          />
          <img
            className="left-box__input-logo"
            src={search}
            alt="c"
          />
        </div>
        <div className="header__main__right-box right-box">
          <div className="right-box__person person">
            <h3 className="person__title">
              Moroz Dmytro
            </h3>
            <p className="person__position">
              Administrator
            </p>
          </div>
          <div className="right-box__bell right-box__bell--active">
            <img
              src={bell}
              alt="bell"
              className={classNames('right-box__bell-img',
                { 'right-box__bell-img--active': messageNumber > 0 })}
            />
            <div className="right-box__active-messages">
              {messageNumber}
            </div>
          </div>
          <button type="button" className="right-box__settings-button" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isNavVisible: PropTypes.bool.isRequired,
  setNavVisibility: PropTypes.func.isRequired,
};
