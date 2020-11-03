import './rectangle-info.scss';

import React from 'react';

export const RectangleInfo = (props) => {
  const {
    width = 50,
    height = 30,
    content = 'Unknown content.',
    radius = 0,
  } = props;
  return (
    <div
      className="rectangle-info-container"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `${radius}px`,
      }}
    >
      <p className="rectangle-content">{content}</p>
    </div>
  );
};
