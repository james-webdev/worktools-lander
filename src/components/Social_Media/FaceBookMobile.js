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

const FacebookMobile = () => (
  <FaceWrapper className="text-3xl">
    <a href="http://www.facebook.com">
      <FontAwesomeIcon style={{ color: 'rgba(33, 93, 155, 255)' }} icon={faFacebookF} />
    </a>
  </FaceWrapper>
);

export default FacebookMobile;
