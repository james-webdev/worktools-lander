import React from 'react';
import styled from 'styled-components';
import TwitterImg from '../../assets/images/twitter.png';

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
  img {
    max-width: 35px;
    max-height: 35px;
  }
`;

const Twitter = () => (
  <TwitWrapper>
    <a href="http://www.twitter.com">
      <img src={TwitterImg} alt="twitter logo" />
    </a>
  </TwitWrapper>
);

export default Twitter;
