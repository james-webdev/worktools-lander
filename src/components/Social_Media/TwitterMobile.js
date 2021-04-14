import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TwitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  color: #43a2c2;
`;

const TwitterMobile = () => (
  <TwitWrapper className="text-3xl">
    <a href="http://www.twitter.com">
      <FontAwesomeIcon style={{ color: 'rgba(67,162,194,255)' }} icon={faTwitter} />
    </a>
  </TwitWrapper>
);

export default TwitterMobile;
