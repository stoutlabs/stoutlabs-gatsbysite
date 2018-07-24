import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { HTMLContent } from '../Content';

const StyledDetails = styled.div`
    background-color: rgba(30,30,30,0.9);
    opacity: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    transform: translateX(100%);
    z-index: 100;
    transition: transform 300ms ease-out 100ms, opacity 100ms ease-out 200ms;
    overflow: auto;
    
    div.inner {
      padding: 1.5rem;
    }

    div.desc {
      padding: 2rem;

      p {
        font-size: 1rem;
        line-height: 1.66;
        margin: 0;
        padding: 0 0 1.33rem;
      }
      
      ul {
        list-style: disc;
        margin: 0 0 0 1.33rem;
        padding: 1rem 0 1.5rem;
        li {
          font-size: 1rem;
          margin: 0 0 0.4rem;
        }
      }
    }

    div.big-pic {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  &.active {
    
      opacity: 1;
      transition: transform 400ms ease-in 0, opacity 300ms ease-out 0;
      transform: translateX(0);
      
      ${'' /* width: 80vw;
      height: 80vh; */}
    
  }
`;

export const DetailsBox = ({ details, className, handleClose }) => {
  if (details) {
    return (
      <StyledDetails className={`project-details ${className}`}>
        <div className="inner">
          <button className="close-btn" onClick={handleClose}>
            X
          </button>

          <div className="big-pic">
            {details.full_image.localFile && (
              <Img
                fluid={details.full_image.localFile.childImageSharp.fluid}
                title={details.title}
                alt={details.title}
                className="featured-img"
                style={{ margin: '0' }}
                // imgStyle={{}}
              />
            )}
          </div>

          <HTMLContent content={details.body.html} className="desc" />
        </div>
      </StyledDetails>
    );
  } else {
    return null;
  }
};

export default DetailsBox;
