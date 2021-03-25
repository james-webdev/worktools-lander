import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Instagram = () => (
  <InstaWrapper>
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'white' }} icon={faInstagram} size="2x" />
    </a>
  </InstaWrapper>
);

export default Instagram;
