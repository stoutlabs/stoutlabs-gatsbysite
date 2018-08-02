import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import BlogContainer from './BlogContainer';
import BlogHeader from './BlogHeader';
import BlogNav from './BlogNav';

import '../../assets/styles/index.scss';
import config from '../../../config/index';

const StyledHeading = styled.h1`
  font-size: 1.66rem;
  font-family: Merriweather, serif;
  text-align: center;
  padding: 1.5rem 0;
  background: rgba(250, 250, 250, 0.1);
  margin: 0;
  color: #3096a7;
`;

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
          title="Web Design and Development Blog | StoutLabs"
          meta={[
            { name: 'description', content: config.description },
            { name: 'keywords', content: config.keywords }
          ]}
        />
        <BlogHeader siteTitle={config.title} />
        <BlogNav sticky={this.state.stickyNav} className="mininav" />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <StyledHeading>
          StoutLabs Blog: (Mostly) Web Development &amp; Design
        </StyledHeading>
        <BlogContainer>{this.props.children}</BlogContainer>
      </Fragment>
    );
  }
}

export default Layout;