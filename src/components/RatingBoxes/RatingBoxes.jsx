import React from 'react';
import { RatingBox } from '../RatingBox';
import './RatingBoxes.scss';

export const RatingBoxes = () => (
  <div className="rating-boxes">
    <RatingBox
      color="#188ae2"
      title="USER STATUS"
      number="5,100"
      text="This Week"
      progress="90%"
    />
    <RatingBox
      color="#ff5b5b"
      title="SALES"
      number="9,180"
      text="This Mounth"
      progress="80%"
    />
    <RatingBox
      color="#10c469"
      title="PAGE VIEWS"
      number="91,230"
      text="This Month"
      progress="70%"
    />
  </div>
);
