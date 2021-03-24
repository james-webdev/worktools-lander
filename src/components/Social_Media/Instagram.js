import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstaWrapper = styled.div`
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

const Instagram = () => (
  <InstaWrapper>
    <a href="http://www.instagram.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faInstagram} size="2x" />
    </a>
  </InstaWrapper>
);

export default Instagram;
