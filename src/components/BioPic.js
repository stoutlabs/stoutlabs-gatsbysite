import React from "react";
import styled from "styled-components";

const StyledBioPic = styled.div`
  img {
    border-radius: 50%;
    max-width: 125px;
    border: 3px solid #fcfcfc;
  }
`;

const BioPic = ({ className, imgSrc }) => (
  <StyledBioPic className={`${className} bio-pic`}>
    <img src={imgSrc} alt="" />
  </StyledBioPic>
);

export default BioPic;
