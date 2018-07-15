import React from 'react';
import styled from 'styled-components';

import Contact from '../components/Contact';
import IntroContent from '../components/IntroContent';
import Layout from '../components/layout';
import RecentsList from '../components/Projects/RecentsList';
import Tools from '../components/Tools/Tools.js';

const StyledHeadline = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-top: 2rem;

  @media screen and (min-width: 960px) {
    text-align: left;
    font-size: 3.5rem;
    margin-top: 0rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 3rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <StyledHeadline>Your Next Web Developer Awaits!</StyledHeadline>
    <IntroContent />
    <RecentsList />
    <Tools />
    <Contact />
  </Layout>
);

export default IndexPage;
