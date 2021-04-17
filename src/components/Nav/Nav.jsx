import React from 'react';
import { Link } from 'react-router-dom';
import { NavSelect } from '../NavSelect';
import { navs } from '../../info-from-server';
import helpSupport from '../../images/nav/support.png';

import './Nav.scss';

export const Nav = () => (
  <nav className="nav">
    <ul>
      {navs.map(nav => (
        <li key={nav.id}>
          <NavSelect
            links={nav.links}
            title={nav.title}
            icon={nav.img}
          />
        </li>
      ))}
    </ul>
    <Link
      to="help&support"
      className="nav__help-support"
    >
      <img
        src={helpSupport}
        alt="support"
        className="nav__help-support__img"
      />
      <p className="nav__help-support__text">
        Help & Support
      </p>
    </Link>
  </nav>
);
