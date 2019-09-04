import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Content from '../Content';
import PrevNext from './PrevNext';
import BlogShareButtons from './BlogShareButtons';

const StyledPostSection = styled.section`
  margin: 2rem 0;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    margin: 2rem 1rem;
    padding: 1rem 2rem;
  }
`;

const StyledPostContainer = styled.div`
  div.blog-post {
    padding: 0 1.25rem;

    @media (min-width: 960px) {
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4 {
      font-size: 1.6rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.33;

      @media screen and (min-width: 960px) {
        font-size: 2rem;
        line-height: 1.4;
      }
    }

    h1 {
      font-size: 2.2rem;
      color: #e95d55;
    }

    h2 {
      color: #e33f52;
      margin: 0 0 1.8rem;
      border-bottom: 1px solid #e33f52;
    }

    p.post-date {
      color: #99d7e1;
      font-size: 0.85rem;
      padding: 0.5rem 0 0;
    }

    div.featured-image {
      margin: 0 0 2.5rem;
    }

    div.post-content {
      padding: 0;
      margin: 0;

      h3 {
        font-size: 1.4rem;
        margin: 0;
        line-height: 1.33;
        text-align: left;
        padding: 0 0 1rem;

        @media screen and (min-width: 960px) {
          font-size: 1.5rem;
          padding-top: 0.5rem;
        }
      }

      h4 {
        font-size: 1.33rem;
        margin: 0;
        padding: 0.5rem 0 0.75rem;

        @media screen and (min-width: 960px) {
          font-size: 1.45rem;
        }
      }

      p,
      li {
        font-size: 1.10rem;
        line-height: 1.75;
        letter-spacing: 0.01rem;
      }

      p {
        margin-bottom: 1.6rem;
      }

      p.filelabel {
        text-align: right;
        padding: 0;
        margin: 0 0 6px;
        font-size: 15px;
        font-weight: 600;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        color: #99d7e1;

        span {
          background: rgba(250,250,250,0.1);
          padding: 0.33em 0.66em;
        }
      }

      ul {
        list-style: disc;
        margin: 0 0 1rem 1.5rem;
      }

      ol {
        list-style: decimal;
        margin: 0 0 1rem 1.5rem;
      }

      a {
        color: #ff7485;

        &:visited {
          color: #ff7485;
        }
        &:hover {
          color: #ea5d55;
        }
      }
      strong,
      b {
        font-weight: bold;
      }
      em,
      i {
        font-style: italic;
      }
    }

    div.post-tags {
      text-align: center;

      h4 {
        font-size: 1.2rem;
        color: #3096a7;
      }
      ul {
        li {
          display: inline-block;
          margin: 0 0.5rem 0.5rem 0;
          a {
            color: #fff;
            text-decoration: none;
            padding: 0.3rem 0.4rem;
            background: rgba(250, 250, 250, 0.1);
            border-radius: 8px;
            display: inline-block;
            font-size: 0.95rem;
            letter-spacing: 0.01rem;
          }

          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
`;

const Post = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet,
  prev,
  next,
  featureimg,
  timetoread,
  slug,
  allNode,
  shareImg
}) => {
  const PostContent = contentComponent || Content;

  return (
    <StyledPostSection className="section-post">
      <StyledPostContainer className="blog-post-container">
        <div className="blog-post">
          <h1>{title}</h1>
          <p className="post-date">
            {date} |{' '}
            <span className="readtime">
              time to read: {timetoread} min
              {timetoread > 1 ? 's' : ''}
            </span>
          </p>

          {featureimg && (
            <div className="featured-image">
              <Img fluid={featureimg.childImageSharp.fluid} alt={title} />
            </div>
          )}

          <PostContent content={content} className="post-content" />

          <BlogShareButtons
            postPath={slug}
            postNode={allNode}
            mobile={false}
            shareImg={shareImg}
          />

          {tags && tags.length ? (
            <div className="post-tags">
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

          <PrevNext prev={prev} next={next} />
        </div>
      </StyledPostContainer>
    </StyledPostSection>
  );
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string
};

export default Post;
