import React from 'react';
import classNames from 'classnames';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { RatingBoxes } from '../RatingBoxes';
import { Events } from '../Events';
import { Weather } from '../Weather';

import './Dashboard.scss';
import { Order } from '../Order/Order';

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
        <div>top</div>
        <div className="dashboard__order">
          <Order />
        </div>
      </div>
    </div>
  );
};
