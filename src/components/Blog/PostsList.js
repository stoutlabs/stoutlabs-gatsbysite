import React from 'react';
import styled from 'styled-components';

import FeaturedPosts from './FeaturedPosts';
import Summary from './Summary';

const PostsList = styled.div`
  padding: 1rem;

  h2 {
    color: #3096a7;
    font-size: 2.2rem;
    margin: 0 0 3rem;
  }

  div.posts-list {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export default ({ posts }) => {
  //const featuredPosts = posts.slice(0, 2);
  const featuredPosts = posts.slice(0, 1);
  const otherPosts = posts.slice(1);

  return (
    <PostsList className="blog">
      <FeaturedPosts posts={featuredPosts} />

      {otherPosts.length > 0 && (
        <div className="posts-list">
          {otherPosts.map(({ node }) => {
            const title = node.frontmatter.title
              ? node.frontmatter.title
              : node.fields.slug;

            return <Summary node={node} key={node.fields.slug} title={title} />;
          })}
        </div>
      )}
    </PostsList>
  );
};
