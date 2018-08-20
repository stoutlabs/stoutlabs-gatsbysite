import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Container from './Container';
import Header from './Header';
import Nav from '../components/Nav';

import 'typeface-emilys-candy';
import 'typeface-merriweather';
import '../assets/styles/index.scss';
import config from '../../config/index';
import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon from '../assets/favicon.ico';

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

  // <meta name="google-site-verification" content="1Uqm6h9_iawEMYdHmb86lBBUQv_1CJTzeXmcOiLuOpo" />

  render() {
    return (
      <Fragment>
        <Helmet
          title={config.title}
          meta={[
            { name: 'description', content: config.description },
            { name: 'keywords', content: config.keywords },
            {
              name: 'google-site-verification',
              content: '1Uqm6h9_iawEMYdHmb86lBBUQv_1CJTzeXmcOiLuOpo'
            }
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
