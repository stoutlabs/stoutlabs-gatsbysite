import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faWrench,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    transition: transform 350ms ease-in 1ms, opacity 300ms ease-in 50ms;
    overflow: auto;
    overscroll-behavior: contain;


    &.active {
    
        opacity: 1;
        transition: transform 350ms ease-out 1ms, opacity 300ms ease-out 50ms;
        transform: translateX(0);
        
        ${'' /* width: 80vw;
        height: 80vh; */}
      
    }
    
    div.inner {
      padding: 0 0 1rem;
      max-width: 1100px;
      margin: 0 auto;
      background: rgba(250,250,250,0.01);
      overflow: auto;
    }
    
    div.closer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      background-color: rgba(230,220,200, 0.1);
      padding: 0.75rem;
      margin-bottom: 1rem;

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
      margin: 0 0 1rem;
    }

    div.details-boxes {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      
      
      @media screen and (min-width: 960px) {
        flex-direction: row;
        
      }
    }

    div.closer-lower {
      
      width: 100%;
      text-align: center;
      
      span {
        padding: 0.5rem;
        line-height: 1.5;
        color: #ea5d55;
        font-size: 1.25rem;

        &:hover {
          color: #ed726b;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      
    }

    div.tools-list, div.source-url {
      text-align: center;
      padding: 1.5rem 1rem;
      background: rgba(250, 250, 250, 0.05);
      border: 1px solid rgba(153, 215, 225, 0.25);
      margin-bottom: 1rem;
      order: 1;
      
      
      @media screen and (min-width: 960px) {
        padding: 2rem 1rem;
        width: 50%;
        order: 2;
      }


      h4 {
        color: #3096a7;
      }
      p {
        margin: 0;
        color: #fdf0d5;
        font-size: 1rem;
      }
    }
    
    div.source-url {
      width: 100%;

      @media screen and (min-width: 960px) {
        order: 1;
        width: 50%;
      }
    }

    div.desc {
      padding: 2rem 2rem 1rem;
      order: 3;

      

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
      margin: 0 auto 2rem;
    }
  }

  
`;

export const DetailsBox = ({ details, className, handleClose }) => {
  if (details) {
    return (
      <StyledDetails
        className={`project-details ${className}`}
        onClick={handleClose}
      >
        <div className="inner" onClick={e => e.stopPropagation()}>
          <div className="closer">
            <span>close</span>
            <button
              className="closer-btn"
              onClick={handleClose}
              aria-label="Close details"
            >
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
                key={details.title}
                // imgStyle={{}}
              />
            )}
          </div>

          <div className="details-boxes">
            <div className="tools-list">
              <h4>
                <FontAwesomeIcon icon={faWrench} /> Tools Used:
              </h4>
              <p>{details.tools}</p>
            </div>

            <div className="source-url">
              <h4>
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Links:
              </h4>
              {details.source ? (
                <p>
                  <a
                    href={details.source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    view source on <FontAwesomeIcon icon={faGithub} />
                  </a>
                </p>
              ) : null}
              {details.url ? (
                <p>
                  <a
                    href={details.url.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    launch project <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <HTMLContent content={details.body.html} className="desc" />

          <div className="closer-lower">
            <span onClick={handleClose}>
              close <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
        </div>
      </StyledDetails>
    );
  } else {
    return null;
  }
};

export default DetailsBox;
