import React from "react";
import styled from "styled-components";

import FeaturedPosts from "./FeaturedPosts";
import { Summary } from "./Summary";

const StyledPostsList = styled.div`
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

const PostsList = ({ posts, currentPage }) => {
  // const featuredPosts = posts.slice(0, 2);
  // const featuredPosts = posts.slice(0, 1);
  const featuredPosts = currentPage === 1 ? posts.slice(0, 2) : null;
  const otherPosts = currentPage === 1 ? posts.slice(2) : posts;

  return (
    <StyledPostsList className="blog">
      {currentPage === 1 && <FeaturedPosts posts={featuredPosts} />}

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
    </StyledPostsList>
  );
};

export default PostsList;
