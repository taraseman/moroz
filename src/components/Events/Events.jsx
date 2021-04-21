import React from 'react';
import { events } from '../../info-from-server';

import './Events.scss';

export const Events = () => (
  <div className="events">
    <h3 className="events__title">EVENTS</h3>
    <ul className="events__list">
      {events.map((event, i) => (
        <li
          className="events__item"
          key={event.id}
        >
          <div className="events__item-title">{event.title}</div>
          <div
            className="events__item-box"
            style={{
              backgroundColor: event.color,
            }}
          >
            {event.number}
          </div>
        </li>
      ))}
    </ul>
  </div>
);
