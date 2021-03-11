import React from 'react';

const Pulse = () => {
  return (
    <div className="sm:flex-col sm:mb-20 sm:justify-center sm:items-center text-center sm:w-1/2">
      <div className="flex-col justify-center items-center">
        <div className="z-10 ml-10 mr-10">
          <h1 className="pt-10 text-center text-2xl text-black lg:text-5xl xl:text-6xl font-bold">
            Continually assess
          </h1>
          <h1 className="complianceblue text-center text-2xl font-bold">
            your compliance to IT standards
          </h1>
        </div>
        <div id="blob" className="-z-1 flex mr-20 mt-10 justify-end items-center">
          <div className="blob" />
        </div>
      </div>
    </div>
  );
};

export default Pulse;
