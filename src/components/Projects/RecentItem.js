import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { HTMLContent } from '../Content';

const StyledRecentItem = styled.article`
  width: 100%;
  min-height: 200px;
  ${'' /* background: #f4f4f4; */} /* test */
  margin: 0 0 1rem 0;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 0 1rem 1rem 0;
    width: calc(50% - 2rem);
  }

  p {
    margin: 0 0 0.6rem;
  }

  div.thumbnail {
    position: relative;
    img {
      max-width: 100%;
    }
    z-index: 5;
  }

  h5 {
    padding: 1.4rem 0 0.2rem;
  }

  p.tools-used {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #3096a7;

    padding: 0.5rem 0;

    b {
      color: #99d7e1;

      font-weight: 700;
    }
  }

  div.inner-content {
    opacity: 0;
    position: absolute;
    z-index: 4;
  }

  &.active {
    background: #eee;
  }
`;

export const RecentItem = props => {
  //console.log('props.details.thumbnail', props.details.thumbnail);
  return (
    <StyledRecentItem
      className={`recent-item ${props.isActive ? 'active' : ''}`}
    >
      <div
        className="thumbnail"
        onClick={() => props.handleClick(props.uid, props.details)}
      >
        {props.details.thumbnail.localFile ? (
          <Img
            fluid={props.details.thumbnail.localFile.childImageSharp.fluid}
            title={props.details.title}
            alt={props.details.title}
            className="thumbnail-img-wrap"
            style={{ margin: '0' }}
            // imgStyle={{}}
          />
        ) : (
          <span>No pic</span>
        )}
      </div>

      <h5>{props.details.title}</h5>
      <p className="tools-used">
        <b>Built With:</b> {props.details.tools}
      </p>

      <div className="inner-content">
        <HTMLContent content={props.details.body.html} className="desc" />

        <div className="big-pic">
          {props.details.full_image.localFile && (
            <Img
              fluid={props.details.full_image.localFile.childImageSharp.fluid}
              title={props.details.title}
              alt={props.details.title}
              className="featured-img"
              style={{ margin: '0' }}
              // imgStyle={{}}
            />
          )}
        </div>
      </div>
    </StyledRecentItem>
  );
};

export default RecentItem;
