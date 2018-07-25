import React, { Component, Fragment } from 'react';
//import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import config from '../../config/index';

import Header from './Header';
import Container from './Container';
import Nav from '../components/Nav';

import '../assets/styles/index.scss';
import favicon from '../assets/favicon.ico';
import appleTouchIcon from '../assets/apple-touch-icon.png';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <Fragment>
        <Helmet
          title={config.title}
          meta={[
            { name: 'description', content: config.description },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <Header siteTitle={config.title} />
        <Nav sticky={this.state.stickyNav} className="mininav" />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <Container>{this.props.children}</Container>
      </Fragment>
    );
  }
}

export default Layout;
