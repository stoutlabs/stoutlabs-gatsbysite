import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Content from '../Content';
import PrevNext from './PrevNext';

const StyledPostContainer = styled.div`
  div.blog-post {
    h2,
    h3,
    h4 {
      font-size: 2.66rem;
      font-family: 'Merriweather', serif;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.4rem;
    }

    h4 {
      font-size: 1.6rem;
    }

    p.post-date {
      color: #3096a7;
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
        font-size: 1.2rem;
        line-height: 1.75;
        letter-spacing: 0.01rem;
      }

      ul {
        list-style: disc;
        margin: 0 0 1rem 1.5rem;
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
  featureimg
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <StyledPostContainer className="blog-post-container">
        <div className="blog-post">
          <h2>{title}</h2>
          <p className="post-date">{date}</p>

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
    </section>
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