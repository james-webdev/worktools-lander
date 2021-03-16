import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseMove = keyframes`
0% {
  transform: scale(0.9);
  box-shadow: 0 0 0 0 rgba(184, 199, 220, 0.3);
}
95% {
  transform: scale(1);
  box-shadow: 0 0 0 150px rgba(198, 225, 237, 0.4);
}
100% {
  transform: scale(0.9);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const PulseDiv = styled.div`
  animation-name: ${pulseMove};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  background: #b8c7dc;
  border-radius: 50%;
  margin: 10px;
  height: 35px;
  width: 35px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
`;

const Pulse = () => {
  return (
    <div className="text-center">
      <div className="flex-col justify-center items-center">
        <div id="blob" className="-z-1 -mb-20 flex mr-20 mt-24 justify-end items-center">
          <PulseDiv>
            <div className="blob" />
          </PulseDiv>
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
