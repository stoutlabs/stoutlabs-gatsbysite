import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";
import styled from "styled-components";

import BlogContainer from "./BlogContainer";
import BlogHeader from "./BlogHeader";
import BlogNav from "./BlogNav";
import Footer from "../Footer";
import CategoriesNav from "./CategoriesNav";

import "typeface-emilys-candy";
import "typeface-merriweather";
import "../../assets/styles/index.scss";
import config from "../../../config/index";
import appleTouchIcon from "../../assets/apple-touch-icon.png";
import favicon from "../../assets/favicon.ico";

const StyledHeading = styled.h1`
  font-size: 1.4rem;
  font-family: Merriweather, serif;
  text-align: center;
  padding: 1.5rem 0;
  background: rgba(40, 40, 110, 0.1);
  margin: 0;
  color: #3096a7;
  border-bottom: 1px solid rgba(200, 200, 200, 0.1);

  @media screen and (min-width: 768px) {
    font-size: 1.66rem;
  }
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
            { name: "description", content: config.description }
          ]}
        >
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={appleTouchIcon} />
        </Helmet>

        <BlogHeader siteTitle={config.title} />
        <BlogNav sticky={this.state.stickyNav} className="mininav" />
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} />
        <StyledHeading>
          StoutLabs Blog: (Mostly) Web Development &amp; Design
        </StyledHeading>
        <CategoriesNav />
        <BlogContainer>{this.props.children}</BlogContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
