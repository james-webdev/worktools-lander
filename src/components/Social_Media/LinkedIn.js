import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LinkedWrapper = styled.div`
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

const LinkedIn = () => (
  <LinkedWrapper>
    <a href="http://www.LinkedIn.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faLinkedinIn} size="2x" />
    </a>
  </LinkedWrapper>
);

export default LinkedIn;
