import React from 'react';
import styled from 'styled-components';
import LinkedInImg from '../../assets/images/linkedin.png';

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
  img {
    max-width: 35px;
    max-height: 35px;
  }
`;

const LinkedIn = () => (
  <LinkedWrapper>
    <a href="http://www.LinkedIn.com">
      <img src={LinkedInImg} alt="LinkedIn logo" />
    </a>
  </LinkedWrapper>
);

export default LinkedIn;
