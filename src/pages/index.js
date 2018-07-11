import React from 'react';
import styled from 'styled-components';

import Contact from '../components/Contact';
import Layout from '../components/layout';
import RecentsList from '../components/Projects/RecentsList';
import Tools from '../components/Tools/Tools.js';
import CTA from '../components/CTA';

//import SVGWorking from '../assets/images/undraw_working.svg';
import theme from '../utils/theme';

const StyledHeadline = styled.h2`
  text-align: center;
  font-size: 3rem;

  @media screen and (min-width: 960px) {
    text-align: left;
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const StyledIntroDiv = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 2rem 2rem 2rem;
  margin: 0;
  min-height: 100vh;
  text-align: center;

  @media screen and (min-width: 960px) {
    text-align: left;
  }

  img {
    width: 40%;
    float: right;
    margin: 0 0 0 1rem;

    &::after {
      content: '.';
      clear: both;
    }
  }

  h3 {
    color: #3096a7;
    margin: 0 0 1rem;
    padding: 1rem 0 0.1rem;
    border-bottom: 1px solid #3096a7;
    width: auto;
    display: inline-block;
  }

  p {
    font-size: 1.4rem;
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
    list-style: disc;
    margin: 0 0 0 2rem;
    padding: 1rem 0;

    li {
      font-size: 1.3rem;
      line-height: 1.5;
      color: #ebd9b1;
      padding: 0 0 1;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <StyledHeadline>Your Next Web Developer Is Waiting...</StyledHeadline>

    <StyledIntroDiv theme={theme}>
      {/* <p>silly (match.com) photo here</p> */}
      <h3>I Am:</h3>
      <p>
        A fun-loving, constantly learning freelance web developer looking to
        create <strong>modern & effective online presences</strong> for you.
        Loves Javascript, solving problems, and is an excellent communicator.
      </p>

      <h3>You Are:</h3>
      <ul>
        <li>
          An individual, start-up, or small to medium sized business seeking
          blazing-fast websites and apps.
        </li>
        <li>
          A company looking to hire a remote React developer, full or part time.
        </li>
        <li>
          An art director and/or web designer who would prefer to avoid coding,
          and needs their projects expertly and efficiently crafted.
        </li>
      </ul>

      <p>
        Whether you need a full website, a custom app, a marketing mini-site or
        landing page, help with an email campaign, or general online strategy
        consulting... I will craft and develop <b>solutions</b> that work.
      </p>

      <CTA url={'/page-2/'} title="View My Work" />
    </StyledIntroDiv>
    <RecentsList />
    <Tools />
    <Contact />
  </Layout>
);

export default IndexPage;
