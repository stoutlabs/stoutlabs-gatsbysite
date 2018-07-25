import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 3rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 960px) {
    margin-left: 35%;
    width: 65%;
    padding: 3rem 3rem 2.4rem;
  }
`;

export const Container = ({ children }) => {
  return <ContainerDiv className={`container`}>{children}</ContainerDiv>;
};

export default Container;
