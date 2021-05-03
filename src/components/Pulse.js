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
  z-index: -2;
`;

const Pulse = () => {
  return (
    <div className="text-center pulseposition sm:w-20">
      <div className="flex-col justify-center items-center">
        <div
          id="blob"
          className="-z-1 -mb-20 sm:mb-4 flex mr-20 sm:mr-0 mt-24 sm:mt-0 sm:ml-8 justify-end sm:justify-start items-center sm:items-start sm:h-20"
        >
          <PulseDiv>
            <div className="blob" />
          </PulseDiv>
        </div>
      </div>
    </div>
  );
};

export default Pulse;
