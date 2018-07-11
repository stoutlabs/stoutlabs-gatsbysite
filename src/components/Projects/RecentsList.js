import React, { Component } from 'react';
import styled from 'styled-components';

import RecentItem from './RecentItem';

//temp data
import tempItems from '../../utils/projects';

const StyledRecents = styled.section`
  border-bottom: 1px solid #ddd;
  position: relative;

  div.recents-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export class RecentsList extends Component {
  state = {
    projects: [],
    isLoaded: false,
    activeItem: null
  };

  componentDidMount = () => {
    this.setState(() => {
      return {
        projects: tempItems,
        isLoaded: true
      };
    });
  };

  handleClick = id => {
    console.log(`id: ${id} was clicked.`);
    this.setState(() => {
      return {
        activeItem: id
      };
    });
  };

  render() {
    return (
      <StyledRecents>
        <h3>Recent Projects</h3>

        <div className="recents-list">
          {this.state.projects.map((item, index) => {
            return (
              <RecentItem
                isActive={this.state.activeItem === item.uid ? true : false}
                key={index}
                details={item}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      </StyledRecents>
    );
  }
}

export default RecentsList;
