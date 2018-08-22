import React from 'react';
import styled from 'styled-components';

import FeatureLarge from './FeatureLarge';

const StyledFeatures = styled.div`
  padding: 1rem;
`;

export default ({ posts }) => {
  return (
    <StyledFeatures className="featured-posts">
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title
          ? node.frontmatter.title
          : node.fields.slug;

        return <FeatureLarge node={node} key={index} title={title} />;
      })}
    </StyledFeatures>
  );
};
