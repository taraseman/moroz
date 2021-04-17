import React from 'react';
import classNames from 'classnames';
import { RatingBoxes } from '../RatingBoxes';

import './Dashboard.scss';

export const Dashboard = ({ isNavVisible }) => (
  <div
    className={classNames('dashboard', { 'dashboard--small': isNavVisible })}
  >
    <RatingBoxes />
    <div className="dashboard__wrapper-visitors">
      <div>
        Graphic
      </div>
      <div className="dashboard__events-weather">
        Events+WEather
      </div>
    </div>
  </div>
);
