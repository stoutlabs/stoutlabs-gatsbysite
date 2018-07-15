import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import BioPic from '../components/BioPic';
import CTA from '../components/CTA';

import theme from '../utils/theme';
import SmBioPic from '../assets/images/profile_pic_alt.jpg';
import MatchPic from '../assets/images/match_pic.png';

const StyledIntroDiv = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 2rem 1rem;
  margin: 0;
  min-height: 100vh;
  text-align: center;

  @media screen and (min-width: 960px) {
    text-align: left;
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
    display: inline-block;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 2rem;

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

  ul {
    list-style: none;
    margin: 0 0 0 1rem;
    padding: 0.5rem 0;

    li {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #ebd9b1;
      padding: 0 0 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;

      svg {
        margin-right: 20px;
        color: #971640;
      }
    }
  }
`;

export const IntroContent = () => {
  return (
    <StyledIntroDiv theme={theme} className="intro">
      {/* <p>silly (match.com) photo here</p> */}

      <div className="intro-box">
        <BioPic className="intro-pic" imgSrc={SmBioPic} />
        <div className="intro-content">
          <h3>I Am:</h3>
          <p>
            A hard working and continually learning freelance web developer
            looking to create{' '}
            <strong>modern & effective online presences</strong> for you. Loves
            JavaScript, solving problems, and is an excellent communicator.
          </p>
        </div>
      </div>

      <div className="intro-box">
        <BioPic className="intro-pic" imgSrc={MatchPic} />
        <div className="intro-content">
          <h3>You Are:</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHeart} /> An individual or small/medium
              sized business needing a fast & mobile-friendly website or app.
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} /> A company looking to hire a
              remote React developer, full or part time.
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} /> An art director and/or web
              designer who would prefer to avoid coding, and needs their
              projects expertly and efficiently crafted.
            </li>
          </ul>
        </div>
      </div>

      <p>
        From full websites and apps to marketing mini-sites, landing pages,
        email campaigns, chat bots, and MUCH more – I will work with you to
        develop <b>solutions that impress.</b>
      </p>

      <CTA url={'/page-2/'} title="View My Work" />
    </StyledIntroDiv>
  );
};

export default IntroContent;
