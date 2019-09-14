import React from "react";
import { kebabCase } from "lodash";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import BlogLayout from "components/Blog/BlogLayout";
import Seo from "components/Seo";

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
      border: 1px solid rgba(250, 250, 250, 0.1);
      padding: 0.75rem 1rem;
      margin: 0.5rem 0.33rem;
      display: inline-flex;
      flex-direction: row;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

const seoData = {
  frontmatter: {
    title: `All Tags | StoutLabs Web Design & Development Blog`,
    description: "List of all tags used in my blog.",
  },
};

const TagsPage = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  // destructure and sort tags by count
  const sortedTags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  return (
    <BlogLayout>
      <TagIndexSection>
        <Seo postData={seoData} />
        <div className="content">
          <div>
            <h2 className="title is-size-2 is-bold-light">All Tags:</h2>

            <ul className="taglist">
              {sortedTags.map(tag => (
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
};

export default TagsPage;
