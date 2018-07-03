import React from 'react';
import styled from 'styled-components';

import RecentItem from './RecentItem';

const StyledRecents = styled.section`
  border-bottom: 1px solid #ddd;

  h3 {
    font-size: 2.4rem;
    line-height: 3.3rem;
    font-weight: 700;
    color: #6a6a6a;
    margin: 0 0 2.5rem;
  }

  div.recents-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export default () => {
  return (
    <StyledRecents>
      <h3>Recent Projects</h3>

      <div className="recents-list">
        <RecentItem />
        <RecentItem />
        <RecentItem />
        <RecentItem />
        <RecentItem />
        <RecentItem />
      </div>
    </StyledRecents>
  );
};
