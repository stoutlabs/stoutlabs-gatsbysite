import React from 'react';
//import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

import Header from './Header';
import Container from './Container';

import '../assets/styles/index.scss';
import favicon from '../assets/favicon.ico';
import appleTouchIcon from '../assets/apple-touch-icon.png';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>{children}</Container>
      </>
    )}
  />
);

// Layout.propTypes = {
//   children: PropTypes.element.isRequired
// };

export default Layout;
