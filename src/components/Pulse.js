import React from 'react';

const Pulse = () => {
  return (
    <div className="text-center">
      <div className="flex-col justify-center items-center">
        <div id="blob" className="-z-1 -mb-20 flex mr-20 mt-24 justify-end items-center">
          <div className="blob" />
        </div>
        <div className="z-10 text-left -mt-5 ml-6 mr-10">
          <h1 className="text-3xl text-black lg:text-5xl xl:text-6xl font-bold">Continually</h1>
          <h1 className="text-3xl text-black lg:text-5xl xl:text-6xl font-bold">assess your</h1>
          <h1 className="compliancebluetext text-3xl font-bold"> compliance to </h1>
          <h1 className="compliancebluetext text-3xl font-bold">IT standards</h1>
        </div>
      </div>
    </div>
  );
};

export default Pulse;
