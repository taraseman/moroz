import React from 'react';
import { PhoneRating } from '../PhoneRating';

import { topPhones } from '../../info-from-server';

import './Top.scss';

export const Top = () => (
  <div className="top">
    <div className="top__header">
      <div className="top__content">
        <h3 className="top__title">TOP 10 STORES</h3>
        <p className="top__text">Best Seller Per Month</p>
      </div>
      <div>
        <button
          type="button"
          className="top__button"
        >
          All Stores
        </button>
      </div>
    </div>
    <ul className="top__rating-list">
      {topPhones.map(item => (
        <li
          key={item.id}
        >
          <PhoneRating
            title={item.title}
            number={item.number}
            percent={item.percent}
            color={item.color}
          />
        </li>
      ))}
    </ul>
  </div>
);
