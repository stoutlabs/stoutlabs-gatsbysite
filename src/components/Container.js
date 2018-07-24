import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 3rem 2rem;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }

  @media screen and (min-width: 960px) {
    margin-left: 35%;
    width: 65%;
    padding: 8rem 3rem 2.4rem;
  }
`;

export const Container = ({ children }) => {
  return <ContainerDiv className="container">{children}</ContainerDiv>;
};

export default Container;
