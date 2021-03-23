import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseMove = keyframes`
0% {
  transform: scale(0.9);
  box-shadow: 0 0 0 0 rgba(184, 199, 220, 0.3);
}
95% {
  transform: scale(1);
  z-index: -2;
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
      </div>
    </div>
  );
};

export default Pulse;
