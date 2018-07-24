import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
      padding: 0;
      max-width: 1100px;
      margin: 0 auto;
      background: rgba(250,250,250,0.01);
    }
    
    div.closer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      background-color: rgba(230,220,200, 0.1);
      padding: 0.75rem;

      button.closer-btn {
        font-size: 1.6rem;
        border: 1px solid rgba(250,250,250,0.8);
        padding: 0.35rem 0.75rem;
        background-color: #971640;
        color: #fff;
        transition: background-color 150ms linear;

        &:hover {
          background-color: #e95c54;
        }
      }
      
      span {
        color: #febcb8;
        font-size: 0.9rem;
        text-transform: uppercase;
        padding-right: 0.5rem;
      }
    }

    h3 {
      text-align: center;
      font-size: 1.75rem;
      font-family: Merriweather, serif;
    }

    div.details-body {
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
    }

    div.tools-used {
      text-align: center;
      padding: 2rem;
      h4 {
        color: #3096a7;
      }
      p {
        margin: 0;
        color: #fdf0d5;
      }
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
      max-width: 700px;
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
          <div className="closer">
            <span>close</span>
            <button className="closer-btn" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <h3>{details.title}</h3>
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

          <div className="details-body">
            <HTMLContent content={details.body.html} className="desc" />

            <div className="tools-used">
              <h4>Tools Used</h4>
              <p>{details.tools}</p>
            </div>
          </div>
        </div>
      </StyledDetails>
    );
  } else {
    return null;
  }
};

export default DetailsBox;
