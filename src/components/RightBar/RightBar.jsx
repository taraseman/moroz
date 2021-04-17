import React from 'react';
import { NewMessages } from '../NewMessages';
import { ChatLine } from '../ChatLine';

import './RightBar.scss';

export const RightBar = () => (
  <div className="right-bar">
    <NewMessages />
    <ChatLine />
  </div>
);
