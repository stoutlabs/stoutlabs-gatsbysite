import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { HTMLContent } from '../Content';

const StyledDetails = styled.div`
    background-color: rgba(30,30,30,0.9);
    opacity: 0;
    position: absolute;
    top: 20px;
    height: 90vh;
    width: 100%;
    transform: translateX(100%);
    z-index: 4;
    transition: transform 600ms ease-out 400ms;
    
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
    }
  }

  &.active {
    
      opacity: 1;
      transform: translateX(0);
      z-index: 100;
      ${'' /* width: 80vw;
      height: 80vh; */}
    
  }
`;

export const DetailsBox = ({ details, className }) => {
  if (details) {
    return (
      <StyledDetails className={`project-details ${className}`}>
        <HTMLContent content={details.body.html} className="desc" />

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
      </StyledDetails>
    );
  } else {
    return null;
  }
};

export default DetailsBox;
