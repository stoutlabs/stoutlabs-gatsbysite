import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { HTMLContent } from "./Content";
import BioPic from "./BioPic";
import { CTA } from "./CTA";

import theme from "../utils/theme";
import SmBioPic from "../assets/images/profile_pic_alt.jpg";
import MatchPic from "../assets/images/match_pic.png";

const StyledIntroDiv = styled.div`
  padding: 2rem 0;
  margin: 0 0 1rem;
  ${"" /* min-height: 100vh; */} text-align: center;

  @media screen and (min-width: 960px) {
    text-align: left;
  }

  h3 {
    color: #3096a7;
    font-size: 2.5rem;
    margin: 0 0 1rem;
    padding: 1rem 0 0;

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
    font-size: 1.15rem;
    line-height: 1.6;
    margin: 0 0 2rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
    }

    b,
    strong {
      font-weight: 700;
      color: #fdf8ec;
    }

    em {
      font-style: italic;
      color: #fdf8ec;
    }
  }

  ul {
    list-style: square;
    margin: 0 0 0 1rem;
    padding: 0 0 1rem;

    li {
      font-size: 1.15rem;
      line-height: 1.5;
      color: #e5ca8f;
      padding: 0 0 0.75rem;
      text-align: left;
      margin: 0 0 0 1rem;
    }
  }
`;

const StyledIntroBox = styled.div`
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
`;

const StyledIntroSummary = styled(HTMLContent)`
  p {
    font-size: 1.3rem;
  }
`;

const IntroH2 = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  margin: 1rem 0;
  padding: 0 0 3rem;

  @media screen and (min-width: 960px) {
    text-align: left;
    font-size: 3.5rem;
    margin-top: 3rem;
  }
`;

export const IntroContent = ({ content }) => (
  <StyledIntroDiv theme={theme} className="intro" id="intro">
    <IntroH2>{content.title}</IntroH2>

    <StyledIntroSummary
      content={content.introSummary.html}
      className="intro-summary"
    />

    <StyledIntroBox>
      <BioPic className="intro-pic" imgSrc={SmBioPic} />
      <HTMLContent content={content.introBox1.html} className="intro-content" />
    </StyledIntroBox>

    <StyledIntroBox>
      <BioPic className="intro-pic" imgSrc={MatchPic} />
      <HTMLContent content={content.introBox2.html} className="intro-content" />
    </StyledIntroBox>

    <StyledIntroBox>
      <HTMLContent content={content.currently.html} className="intro-content" />
    </StyledIntroBox>

    <CTA url="#projects" element="projects" title="View My Work" isAnchor />
  </StyledIntroDiv>
);

export default IntroContent;
