import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './NavSelect.scss';

export const NavSelect = ({ links, title, icon }) => {
  const [isNavSelectOpen, setNavSelectOpen] = useState(false);

  return (
    <>
      {
      (links.length > 0)
        ? (
          <>
            <button
              type="button"
              className="nav-button"
              onClick={() => setNavSelectOpen(!isNavSelectOpen)}
            >
              <img
                src={icon}
                alt="v"
                className="nav-button__img"
              />
              <p className="nav-button__title">{title}</p>
              <p
                className={
                  classNames('nav-button__arrow',
                    { 'nav-button__arrow--active': isNavSelectOpen })}
              >
                {'>'}
              </p>
            </button>
            {isNavSelectOpen && (
              links.map(link => (
                <NavLink
                  to={`/${link.toLowerCase()}`}
                  className="nav-link nav-link--small"
                  activeClassName="nav-link--active"
                >
                  <p className="nav-link__title">{link}</p>
                </NavLink>
              ))
            )}
          </>
        ) : (
          <NavLink
            to={`/${title.toLowerCase()}`}
            className="nav-link"
            activeClassName="nav-link--active"
          >
            <img
              src={icon}
              alt="v"
              className="nav-link__img"
            />
            <p className="nav-link__title">{title}</p>
          </NavLink>
        )
    }
    </>
  );
};
