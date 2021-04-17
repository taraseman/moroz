import React, { useState, useEffect } from 'react';
import { newMrssages } from '../../info-from-server';

import './NewMessages.scss';

export const NewMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(newMrssages);
  }, []);

  return (
    <div className="new-messages">
      <h2 className="new-messages__title">NEW MESSAGE</h2>
      <ul className="new-messages__list">
        {messages.map(message => (
          <li key={message.id} className="new-messages__item">
            <img
              src={message.img}
              alt={message.id}
              className="new-messages__img"
            />
            <div className="new-messages__content">
              <h3 className="new-messages__name">{message.name}</h3>
              <p className="new-messages__online">{message.lastOnline}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
