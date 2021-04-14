import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FaceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Facebook = () => (
  <FaceWrapper className="text-2xl">
    <a href="https://www.facebook.com/WORKdotTOOLS/">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faFacebookF} />
    </a>
  </FaceWrapper>
);

export default Facebook;
