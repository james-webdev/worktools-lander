import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FaceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Facebook = () => (
  <FaceWrapper>
    <a href="http://www.facebook.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faFacebookF} size="2x" />
    </a>
  </FaceWrapper>
);

export default Facebook;
