import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { HTMLContent } from './Content';
import BioPic from '../components/BioPic';
import CTA from '../components/CTA';

import theme from '../utils/theme';
import SmBioPic from '../assets/images/profile_pic_alt.jpg';
import MatchPic from '../assets/images/match_pic.png';

const StyledIntroDiv = styled.div`
  padding: 2rem 0 3rem;
  margin: 0;
  ${'' /* min-height: 100vh; */} text-align: center;

  @media screen and (min-width: 960px) {
    text-align: left;
  }

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin: 2rem 0;

    @media screen and (min-width: 960px) {
      text-align: left;
      font-size: 3.5rem;
      margin-top: 3rem;
    }
  }

  div.intro-box {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }

    div.intro-pic {
      @media screen and (min-width: 768px) {
        width: 150px;
      }
    }

    div.intro-content {
      @media screen and (min-width: 768px) {
        width: 80%;
      }
    }
  }

  h3 {
    color: #3096a7;
    font-size: 2.5rem;
    margin: 0 0 1rem;
    padding: 1rem 0 0.1rem;
    border-bottom: 1px solid #3096a7;
    width: auto;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
    }

    @media screen and (min-width: 960px) {
      display: inline-block;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 2rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
    }

    b,
    strong {
      font-weight: 700;
      color: #fff;
    }

    em {
      font-style: italic;
      font-size: 1.3rem;
      opacity: 0.7;
      color: ${props => props.theme.colorAccent2};
    }
  }

  div.intro-summary {
    p {
      font-size: 1.3rem;
      text-align: center;

      @media screen and (min-width: 960px) {
        text-align: left;
      }
    }
  }

  ul {
    list-style: square;
    margin: 0 0 0 1rem;
    padding: 0.5rem 0;

    li {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #e5ca8f;
      padding: 0 0 1;
      text-align: left;
    }
  }
`;

export const IntroContent = ({ content }) => {
  return (
    <StyledIntroDiv theme={theme} className="intro" id="intro">
      <h2>{content.title}</h2>

      <HTMLContent
        content={content.introSummary.html}
        className="intro-summary"
      />
      <div className="intro-box">
        <BioPic className="intro-pic" imgSrc={SmBioPic} />
        <HTMLContent
          content={content.introBox1.html}
          className="intro-content"
        />
      </div>

      <div className="intro-box">
        <BioPic className="intro-pic" imgSrc={MatchPic} />
        <HTMLContent
          content={content.introBox2.html}
          className="intro-content"
        />
      </div>

      <CTA url={'#projects'} element="projects" title="View My Work" isAnchor />
    </StyledIntroDiv>
  );
};

export default IntroContent;
