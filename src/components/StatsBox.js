import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-red-500">{primaryText}</p>
    <p className="font-semibold mb-6 p-2">{secondaryText}</p>
  </>
);

export default StatsBox;
