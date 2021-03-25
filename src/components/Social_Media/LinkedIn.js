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
`;

const LinkedIn = () => (
  <LinkedWrapper>
    <a href="http://www.LinkedIn.com">
      <FontAwesomeIcon style={{ color: 'white' }} icon={faLinkedinIn} size="2x" />
    </a>
  </LinkedWrapper>
);

export default LinkedIn;
