import React, { Component } from 'react';
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

class Container extends Component {
  render() {
    return (
      <ContainerDiv className={`container`}>{this.props.children}</ContainerDiv>
    );
  }
}

// export const Container = ({ children }) => {

// };

export default Container;
