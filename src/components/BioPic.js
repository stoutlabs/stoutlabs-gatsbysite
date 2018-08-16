import React from 'react';
import styled from 'styled-components';

const StyledBioPic = styled.div`
  img {
    border-radius: 50%;
    max-width: 125px;
    border: 3px solid #fcfcfc;
  }
`;

export default props => {
  return (
    <StyledBioPic className={`${props.className} bio-pic`}>
      <img src={props.imgSrc} alt="" />
    </StyledBioPic>
  );
};
