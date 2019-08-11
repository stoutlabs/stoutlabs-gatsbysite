import React, { Component } from 'react';
import styled from 'styled-components';

import RecentItem from './RecentItem';
import DetailsBox from './DetailsBox';

const StyledRecents = styled.section`
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

  p.other-projects {
    font-size: 0.95rem;
    text-align: center;
    font-style: italic;
    padding-top: 2rem;
    opacity: 0.8;
  }
`;

const ProjectOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 90;
  background-color: #141313;
  visibility: hidden;
  opacity: 0.4;
  transition: visibility 1ms linear 550ms, opacity 200ms ease-in 350ms;

  &.show {
    visibility: visible;
    opacity: 0.9;
    transition: visibility 1ms linear 1ms, opacity 200ms ease-in 1ms;
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
        activeDetails: this.props.projects[0].project.document.data
      };
    });
  };

  handleClick = (id, details = null) => {
    this.setState(() => {
      return {
        activeItem: id,
        isViewing: true,
        activeDetails: details
      };
    });
  };

  hideDetails = () => {
    this.setState(() => {
      return {
        activeItem: null,
        isViewing: false
      };
    });
  };

  render() {
    return (
      <StyledRecents id="projects">
        <h3>Recent Projects</h3>

        <div className="recents-list">
          {this.state.isLoaded &&
            this.state.projects.map((itemRaw, index) => {
              const item = itemRaw.project.document.data;
              const uid = itemRaw.project.document.uid;

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

        <p className="other-projects">
          <sup>*</sup>Note: Older projects (mostly WordPress and CakePHP)
          available upon request.
        </p>

        <ProjectOverlay
          className={this.state.isViewing ? 'show' : 'hide'}
          onClick={this.hideDetails}
        />
        <DetailsBox
          details={this.state.activeDetails}
          className={this.state.isViewing ? 'active' : ''}
          handleClose={this.hideDetails}
        />
      </StyledRecents>
    );
  }
}

export default RecentsList;
