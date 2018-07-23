import React, { Component } from 'react';
import styled from 'styled-components';

import RecentItem from './RecentItem';
import DetailsBox from './DetailsBox';

const StyledRecents = styled.section`
  position: relative;

  div.recents-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: baseline;
    }
  }
`;

const ProjectOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  background-color: #111;
  visibility: hidden;
  opacity: 0.3;
  transition: visibility 0ms linear 300ms, opacity 250ms ease-in;

  &.show {
    visibility: visible;
    opacity: 0.9;
    transition-delay: 0ms;
  }
`;

export class RecentsList extends Component {
  state = {
    projects: [],
    isViewing: false,
    isLoaded: false,
    activeItem: null,
    activeDetails: null
  };

  componentDidMount = () => {
    this.setState(() => {
      return {
        projects: this.props.projects,
        isLoaded: true,
        activeDetails: this.props.projects[0].project.document[0].data
      };
    });
  };

  handleClick = (id, details = null) => {
    console.log(`id: ${id} was clicked.`);
    this.setState(() => {
      return {
        activeItem: id,
        isViewing: true,
        activeDetails: details
      };
    });
  };

  hideDetails = () => {
    console.log(`hide details clicked.`);
    this.setState(() => {
      return {
        activeItem: null,
        isViewing: false
      };
    });
  };

  render() {
    return (
      <StyledRecents id="recent-projects">
        <h3>Recent Projects</h3>

        <div className="recents-list">
          {this.state.isLoaded &&
            this.state.projects.map((itemRaw, index) => {
              const item = itemRaw.project.document[0].data;
              const uid = itemRaw.project.document[0].uid;

              return (
                <RecentItem
                  isActive={this.state.activeItem === uid ? true : false}
                  key={index}
                  details={item}
                  uid={uid}
                  handleClick={this.handleClick}
                />
              );
            })}
        </div>

        <ProjectOverlay
          className={this.state.isViewing ? 'show' : 'hide'}
          onClick={this.hideDetails}
        />
        <DetailsBox
          details={this.state.activeDetails}
          className={this.state.isViewing ? 'active' : ''}
        />
      </StyledRecents>
    );
  }
}

export default RecentsList;
