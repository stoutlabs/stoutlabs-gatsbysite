import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 900px;
  }
`;

export const Container = ({ children }) => {
  return <ContainerDiv className={`container`}>{children}</ContainerDiv>;
};

export default Container;
