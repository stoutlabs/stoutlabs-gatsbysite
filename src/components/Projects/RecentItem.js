import React from "react";
import styled from "styled-components";
// import Img from 'gatsby-image';

import Img from "../Image";
import { MarkdownContent } from "../Content";

const StyledRecentItem = styled.article`
  width: 100%;
  min-height: 200px;
  ${"" /* background: #f4f4f4; */} /* test */
  margin: 0 0 1rem 0;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 0 2rem 2rem 0;
    width: calc(50% - 2rem);
  }

  p {
    margin: 0 0 0.6rem;
  }

  div.thumbnail {
    position: relative;
    cursor: pointer;
    transition: opacity 150ms ease-in;

    img {
      max-width: 100%;
    }
    z-index: 5;

    &:hover {
      opacity: 0.85;
    }
  }

  h5 {
    font-size: 1.1rem;
    padding: 1.4rem 0 0.4rem;
  }

  p.tools-used {
    font-size: 1rem;
    line-height: 1.4;
    color: #3096a7;

    padding: 0 0 0.5rem;

    b {
      color: #99d7e1;

      font-weight: 700;
    }
  }

  div.inner-content {
    opacity: 0;
    position: absolute;
    z-index: 4;
    top: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  &.active {
    background: rgba(240, 240, 240, 0.1);
  }
`;

export const RecentItem = ({ details, isActive, handleClick, slug }) => (
  // console.log('props.details.thumbnail', props.details.thumbnail);
  <StyledRecentItem className={`recent-item ${isActive ? "active" : ""}`}>
    <div
      className="thumbnail"
      onClick={() => handleClick(slug, details)}
      role="presentation"
    >
      {details.projectThumb ? (
        <Img
          fluid={
            details.projectThumb && details.projectThumb.childImageSharp.fluid
          }
          title={details.title}
          alt={details.title}
          className="thumbnail-img-wrap"
          style={{ margin: "0" }}
          // src={
          //   !details.projectThumb.childImageSharp && details.projectThumb.url
          // }
          // imgStyle={{}}
        />
      ) : (
        <span>No pic</span>
      )}
    </div>

    <h5>{details.title}</h5>
    <p className="tools-used">
      <b>Built With:</b>{" "}
      {details.project_cats.map((cat, i) => cat.title).join(", ")}
    </p>

    <div className="inner-content">
      <MarkdownContent content={details.description} className="desc" />

      <div className="big-pic">
        {details.projectThumb && (
          <Img
            fluid={
              details.projectThumb && details.projectThumb.childImageSharp.fluid
            }
            title={details.title}
            alt={details.title}
            className="featured-img"
            style={{ margin: "0" }}
            // imgStyle={{}}
            // src={!details.full_image.localFile && details.full_image.url}
          />
        )}
      </div>
    </div>
  </StyledRecentItem>
);

export default RecentItem;
