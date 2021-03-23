import React from 'react';
import styled from 'styled-components';
import FacebookImg from '../../assets/images/facebook.png';

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
  img {
    max-width: 35px;
    max-height: 35px;
  }
`;

const Facebook = () => (
  <FaceWrapper>
    <a href="http://www.facebook.com">
      <img src={FacebookImg} alt="Facebook logo" />
    </a>
  </FaceWrapper>
);

export default Facebook;
