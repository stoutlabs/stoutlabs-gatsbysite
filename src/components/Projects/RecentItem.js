import React from 'react';
import styled from 'styled-components';

const RecentItem = styled.article`
  width: 100%;
  min-height: 200px;
  background: #ddd;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 768px) {
    margin: 0 1rem 1rem 0;
    width: calc(50% - 1rem);
  }
`;

export default () => {
  return (
    <RecentItem className="recent-item">
      <p>Recent Project</p>
    </RecentItem>
  );
};
