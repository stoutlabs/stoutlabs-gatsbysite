import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Content from './Content';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
  div.blog-post {
    h2 {
      font-size: 2.66rem;
    }

    p.post-date {
      color: #3096a7;
      font-size: 0.85rem;
      padding: 0.5rem 0 0;
    }

    p.post-description {
      font-size: 1.3rem;
      line-height: 1.8;
    }

    div.post-content {
      padding: 2rem 0;
      p {
        font-size: 1.1rem;
        line-height: 1.65;
      }
    }

    div.post-tags {
      h4 {
        font-size: 1.2rem;
        color: #3096a7;
      }

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}

      <StyledPostContainer className="blog-post-container">
        <div className="blog-post">
          <h2>{title}</h2>
          <p className="post-date">{date}</p>

          <p className="post-description">{description}</p>

          <PostContent content={content} className="post-content" />

          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }} className="post-tags">
              <h4>Tagged With:</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </StyledPostContainer>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

export default BlogPostTemplate;

/*
<div className="blog-post-container">
  <div className="blog-post">
    <h1>{frontmatter.title}</h1>
    <h2>{frontmatter.date}</h2>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <div className="tags">{frontmatter.tags}</div>
  </div>
</div>

*/
