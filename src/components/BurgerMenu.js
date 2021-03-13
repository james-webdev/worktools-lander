import React from 'react';
import Button from './Button';

const Burger = () => {
  return (
    <div className="sm:hidden p-1">
      <div>
        <Button className="p-3 mt-5 bg-white m-1 rounded">
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10" />
            <rect y="30" width="100" height="8" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Burger;
