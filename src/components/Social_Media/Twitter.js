import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TwitWrapper = styled.div`
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

const Twitter = () => (
  <TwitWrapper>
    <a href="http://www.twitter.com">
      <FontAwesomeIcon style={{ color: 'gray' }} icon={faTwitter} size="2x" />
    </a>
  </TwitWrapper>
);

export default Twitter;
