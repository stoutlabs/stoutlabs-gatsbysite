import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import BlogLayout from '../../components/Blog/BlogLayout';
import Seo from '../../components/Seo';

const TagIndexSection = styled.section`
  padding: 1rem;

  h2 {
    font-size: 2rem;
    font-family: Merriweather, serif;
    margin: 0 0 2rem;
    color: #3096a7;
  }

  ul.taglist {
    li {
      border-bottom: 1px solid rgba(250, 250, 250, 0.1);
      padding-bottom: 0.75rem;
      margin: 0 0 0.75rem;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const seoData = {
  frontmatter: {
    title: `All Tags | StoutLabs Web Design & Development Blog`,
    description: 'List of all tags used in my blog.'
  }
};

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <BlogLayout>
    <TagIndexSection>
      <Seo postData={seoData} />
      <div className="content">
        <div>
          <h2 className="title is-size-2 is-bold-light">All Tags:</h2>

          <ul className="taglist">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TagIndexSection>
  </BlogLayout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
