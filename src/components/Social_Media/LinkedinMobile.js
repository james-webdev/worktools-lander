import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LinkedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  color: #82cadf;
`;

const LinkedInMobile = () => (
  <LinkedWrapper>
    <a href="http://www.LinkedIn.com">
      <FontAwesomeIcon style={{ color: 'rgba(130,202,223,255)' }} icon={faLinkedinIn} size="1x" />
    </a>
  </LinkedWrapper>
);

export default LinkedInMobile;
