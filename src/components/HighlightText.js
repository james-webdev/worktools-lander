import React from 'react';
import styled, { keyframes } from 'styled-components';

const highlight = keyframes` 
    
    15% {
      background-color:  #27aecc;
      color: white;
    }
    100% {
      background-color: none;
    }
`;

const ColourOneDiv = styled.div`
  display: inline;
  padding: 2px;
  border-radius: 4px;
  animation-name: ${highlight};
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
`;

const highlightTwo = keyframes` 
    
    15% { 
      background-color:  #1f7d9c;
      color: white;
    }
    100% {
      background-color: none;
    }
`;

const ColourTwoDiv = styled.div`
  display: inline;
  padding: 2px;
  border-radius: 4px;
  animation-name: ${highlightTwo};
  animation-duration: 5.5s;
  animation-iteration-count: infinite;
`;

const highlightThree = keyframes` 
    
    55% { 
      background-color:  #2b5794;
      color: white;
    }
    100% {
      background-color: none;
    }
`;

const ColourThreeDiv = styled.div`
  display: inline;
  padding: 2px;
  border-radius: 4px;
  animation-name: ${highlightThree};
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
`;

const HighlightText = () => {
  return (
    <div className="">
      <p className="leading-loose text-center text-xl sm:text-4xl sm:ml-20 sm:mr-20">
        <ColourOneDiv className="">Our aim </ColourOneDiv> is to provide ways for SMBs to
        <ColourTwoDiv> manage and secure their IT</ColourTwoDiv>
        &nbsp;and have <ColourThreeDiv> instant access to expert support </ColourThreeDiv> to aid
        with challenging issues
      </p>
    </div>
  );
};

export default HighlightText;
