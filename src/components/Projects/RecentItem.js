import React from 'react';
import styled from 'styled-components';

//temp stuff for building out
import tempPic from '../../assets/images/tester.png';

const StyledRecentItem = styled.article`
  width: 100%;
  min-height: 200px;
  ${'' /* background: #f4f4f4; */} /* test */
  margin: 0 0 1rem 0;

  @media screen and (min-width: 768px) {
    margin: 0 1rem 1rem 0;
    width: calc(50% - 1rem);
  }

  p {
    margin: 0 0 0.6rem;
  }

  div.initial-pic {
    img {
      max-width: 100%;
    }
  }

  div.inner-content {
    opacity: 0;
  }

  &.active {
    background: #eee;
  }
`;

export const RecentItem = props => {
  return (
    <StyledRecentItem
      className={`recent-item ${props.isActive ? 'active' : ''}`}
    >
      <div
        className="initial-pic"
        onClick={() => props.handleClick(props.details.uid)}
      >
        <img src={tempPic} alt="temp" />
      </div>

      <h5>{props.details.title}</h5>

      <div className="inner-content">
        <div className="desc">
          <p>{props.details.desc}</p>
        </div>

        <div className="big-pic">
          <p>Big pic here</p>
        </div>
      </div>
    </StyledRecentItem>
  );
};

export default RecentItem;
