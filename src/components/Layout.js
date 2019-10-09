import React, { Component } from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";

import appleTouchIcon from "assets/apple-touch-icon.png";
import favicon from "assets/favicon.ico";

import { Container } from "components/Container";
import Header from "components/Header";
import { Nav } from "components/Nav";

import "assets/styles/index.scss";
import config from "../../config/index";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    const { stickyNav } = this.state;
    const { children } = this.props;

    return (
      <>
        <Helmet
          title={config.title}
          meta={[
            { name: "description", content: config.description },
            { name: "keywords", content: config.keywords },
            {
              name: "google-site-verification",
              content: "1Uqm6h9_iawEMYdHmb86lBBUQv_1CJTzeXmcOiLuOpo",
            },
          ]}
        >
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>
        <Header siteTitle={config.title} />
        <Nav sticky={stickyNav} className="mininav" />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <Container>{children}</Container>
      </>
    );
  }
}

export default Layout;
