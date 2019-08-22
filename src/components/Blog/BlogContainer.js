import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  background-color: rgba(240, 220, 240, 0.1);
  @media screen and (min-width: 768px) {
    margin: 2rem auto;

    max-width: 990px;
  }
`;

export const Container = ({ children }) => {
  return <ContainerDiv className={`container`}>{children}</ContainerDiv>;
};

export default Container;
