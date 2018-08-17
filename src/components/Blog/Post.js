import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Content from '../Content';
import PrevNext from './PrevNext';

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

    h2,
    h3,
    h4 {
      font-size: 2rem;
      font-family: 'Merriweather', serif;
      line-height: 1.33;

      @media screen and (min-width: 960px) {
        font-size: 2.5rem;
        line-height: 1.4;
      }
    }

    h2 {
      color: #e33f52;
    }

    h3 {
      font-size: 1.66rem;
      margin-bottom: 1.4rem;
      padding-top: 1rem;
      line-height: 1.33;

      @media screen and (min-width: 960px) {
        font-size: 1.8rem;
        padding-top: 1.5rem;
      }
    }

    h4 {
      font-size: 1.33rem;

      @media screen and (min-width: 960px) {
        font-size: 1.6rem;
      }
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

      p,
      li {
        font-size: 1.1rem;
        line-height: 1.75;
        letter-spacing: 0.01rem;

        @media screen and (min-width: 960px) {
          font-size: 1.2rem;
        }
      }

      ul {
        list-style: disc;
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
    }

    div.post-tags {
      h4 {
        font-size: 1.2rem;
        color: #3096a7;
      }
      ul {
        li {
          display: inline-block;
          margin: 0 0.4rem 0 0;
          a {
            color: #fff;
            text-decoration: none;
            padding: 0.4rem 0.6rem;
            background: rgba(250, 250, 250, 0.1);
            border-radius: 8px;
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
  timetoread
}) => {
  const PostContent = contentComponent || Content;

  return (
    <StyledPostSection className="section-post">
      <StyledPostContainer className="blog-post-container">
        <div className="blog-post">
          <h2>{title}</h2>
          <p className="post-date">
            {date} |{' '}
            <span className="readtime">
              time to read: {timetoread} min
              {timetoread > 1 ? 's' : ''}
            </span>
          </p>

          {featureimg && (
            <div className="featured-image">
              <Img fluid={featureimg.childImageSharp.fluid} />
            </div>
          )}

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
  date: PropTypes.string
};

export default Post;
