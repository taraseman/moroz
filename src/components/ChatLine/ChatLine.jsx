import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { ContextActiveMesagges } from '../ContextActiveMessages';
import { chatLine } from '../../info-from-server';

import './ChatLine.scss';

export const ChatLine = () => {
  const [lines, setLines] = useState([]);
  const { setNumberOfMessages } = useContext(ContextActiveMesagges);

  useEffect(() => {
    setNumberOfMessages(chatLine.length);
    setLines(chatLine);
  }, []);

  return (
    <div className="chat-line">
      <h2 className="chat-line__title">CHAT LINE</h2>
      <ul className="chat-line__list">
        {lines.map(line => (
          <li key={line.id} className="chat-line__item">
            <img
              src={line.img}
              alt={line.id}
              className="chat-line__img"
            />
            <div className="chat-line__content">
              <h3 className="chat-line__name">{line.name}</h3>
              <p className="chat-line__message">{line.message}</p>
              <div
                className={classNames('chat-line__circle',
                  { 'chat-line__circle--online': line.online })}
              >
                {' '}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
