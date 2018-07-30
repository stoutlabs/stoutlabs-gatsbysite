import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import BlogContainer from './BlogContainer';
import BlogHeader from './BlogHeader';
import Nav from '../../components/Nav';

import '../../assets/styles/index.scss';
import config from '../../../config/index';
import appleTouchIcon from '../../assets/apple-touch-icon.png';
import favicon from '../../assets/favicon.ico';

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
            { name: 'keywords', content: config.keywords }
          ]}
        >
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <BlogHeader siteTitle={config.title} />
        <Nav sticky={this.state.stickyNav} className="mininav" />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <BlogContainer>{this.props.children}</BlogContainer>
      </Fragment>
    );
  }
}

export default Layout;
