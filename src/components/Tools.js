import React from 'react';
import styled from 'styled-components';

const ToolsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;

  div.tools {
    margin: 0 1.5rem 1.5rem 0;
    background-color: #fafafa;
    padding: 2rem;

    ul {
      padding: 1rem 0 0;
      li {
        margin: 0 0 1rem;
      }
    }
  }
`;

export const Tools = () => {
  return (
    <ToolsSection>
      <h3>My Toolbelt:</h3>

      <div className="tools preferred">
        <h4>
          Currently{' '}
          <span role="img" aria-label="heart">
            💗
          </span>'s:
        </h4>
        <ul>
          <li>React.js (including Gatsby.js)</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div className="tools experienced">
        <h4>Also Highly Experienced With:</h4>
        <ul>
          <li>PHP</li>
          <li>MySql</li>
          <li>jQuery & MooTools</li>
          <li>WordPress</li>
          <li>CakePHP</li>
        </ul>
      </div>

      <div className="tools faves">
        <h4>And I Depend On:</h4>
        <ul>
          <li>Static Hosting: Netlify, Surge</li>
          <li>Deployed Hosting: DigitalOcean, Heroku</li>
          <li>Code Repos: Github, Bitbucket</li>
          <li>Coding Software: Visual Studio Code</li>
        </ul>
      </div>
    </ToolsSection>
  );
};

export default Tools;
