import React from 'react';
import styled from 'styled-components';

import SmBioPic from '../assets/images/profile_pic_alt.jpg';

const StyledBioPic = styled.div`
  img {
    border-radius: 50%;
    max-width: 150px;
    border: 2px solid #fcfcfc;
  }
`;

export default () => {
  return (
    <StyledBioPic className="bio-pic">
      <img src={SmBioPic} alt="" />
    </StyledBioPic>
  );
};
