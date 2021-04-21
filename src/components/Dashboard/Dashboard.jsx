import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { RatingBoxes } from '../RatingBoxes';
import { Events } from '../Events';
import { Weather } from '../Weather';
import { Order } from '../Order/Order';
import { Comments } from '../Comments';
import { Top } from '../Top';

import './Dashboard.scss';

export const Dashboard = ({ isNavVisible }) => {
  const options = {
    animationEnabled: true,
    title: {
      text: 'Visitors',
    },
    axisY: {
      logarithmic: true,
    },
    data: [{
      type: 'spline',
      showInLegend: true,
      dataPoints: [
        { label: 'Sat', y: 30 },
        { label: 'Sun', y: 25 },
        { label: 'Mon', y: 50 },
        { label: 'Tue', y: 33 },
        { label: 'Wed', y: 55 },
        { label: 'Thu', y: 75 },
        { label: 'Fri', y: 60 },
      ],
    }],
  };

  return (
    <div
      className={classNames('dashboard', { 'dashboard--small': isNavVisible })}
    >
      <RatingBoxes />
      <div className="dashboard__wrapper-visitors">
        <div className="dashboard__visitors">
          <CanvasJSChart
            options={options}
          />
        </div>
        <div className="dashboard__events-weather">
          <Events />
          <Weather />
        </div>
      </div>
      <div className="dashboard__top-order-wrapper">
        <Top />
        <div className="dashboard__order">
          <Order />
        </div>
      </div>
      <Comments />
      <div className="dashboard__footer">
        All Right Reserved 2016 © MaslimMahin
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  isNavVisible: PropTypes.bool.isRequired,
};
