import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

import './Order.scss';

export const Order = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: 'ORDER STARS',
    },
    subtitles: [{
      text: '4,500 Delivered',
      verticalAlign: 'center',
      fontSize: 24,
      dockInsidePlotArea: true,
    }],
    data: [{
      type: 'doughnut',
      showInLegend: false,
      dataPoints: [
        { y: 31 },
        { y: 40 },
        { y: 17 },
      ],
    }],
  };

  return (
    <div className="order">
      <CanvasJSChart
        options={options}
      />
    </div>
  );
};
