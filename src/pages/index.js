import React from 'react';
import styled from 'styled-components';

import Contact from '../components/Contact';
import Layout from '../components/layout';
import RecentsList from '../components/Projects/RecentsList';
import Tools from '../components/Tools';
import CTA from '../components/CTA';

import SVGWorking from '../assets/images/undraw_working.svg';

const StyledHeadline = styled.h2`
  text-align: center;

  @media screen and (min-width: 960px) {
    text-align: left;
  }
`;

const StyledIntroDiv = styled.div`
  border-bottom: 1px solid #ddd;
  color: #888;
  padding: 4rem 0 2rem;
  margin: 0;

  img {
    width: 40%;
    float: right;
    margin: 0 0 0 1rem;

    &:::after {
      content: '.';
      clear: both;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
    margin: 0 0 2rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <StyledHeadline>Let's Build Something!</StyledHeadline>

    <StyledIntroDiv>
      <img src={SVGWorking} alt="workspace" />
      <p>
        I'm a freelance web developer looking to create effective online
        presences for start-ups, small-mid sized businesses, and personal
        projects.
      </p>
      <p>
        Whether you need a full website or app, a marketing mini-site or landing
        page, help with an email campaign, or general online strategy
        consulting... I will work with you to deliver modern and intuitive
        solutions that just work.
      </p>

      <CTA url={'/page-2/'} title="Hire Me!" />
    </StyledIntroDiv>
    <RecentsList />
    <Tools />
    <Contact />
  </Layout>
);

export default IndexPage;
