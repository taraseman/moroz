import React from 'react';

import weatherLogo from '../../images/weather.png';
import './Weather.scss';

export const Weather = () => (
  <div className="weather">
    <div className="weather__top">
      <img
        src={weatherLogo}
        alt="weather-logo"
        className="weather__logo"
      />
      <p className="weather__week-day">Sunday</p>
      <p className="weather__date">September 02</p>
    </div>
  </div>
);
