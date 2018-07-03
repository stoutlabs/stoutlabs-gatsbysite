import React from 'react';
import styled from 'styled-components';

import ReactLogo from '../assets/images/react.svg';
import GatsbyLogo from '../assets/images/gatsby.svg';
import NodeLogo from '../assets/images/nodejs.svg';
import GraphQLogo from '../assets/images/graphql.svg';

const ToolsSection = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  align-items: baseline;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  div.tools {
    margin: 0 1.5rem 1.5rem 0;
    background-color: #fafafa;
    padding: 0;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: calc(50% - 1.5rem);
    }

    @media screen and (min-width: 1300px) {
      width: calc(33% - 1.5rem);
    }

    h4 {
      background-color: #eee;
      padding: 1.6rem 1.4rem;
      margin: 0;
      font-size: 1.1rem;
      color: #888;
      text-align: center;
    }

    p {
      font-size: 0.9rem;
    }

    ul {
      li {
        margin: 0;
        padding: 0.7rem 1rem;
        border-bottom: 1px solid #ddd;

        &:last-child {
          border-bottom: none;
        }

        img {
          max-width: 40px;
        }

        p {
          margin: 0;
          color: #999;
          text-align: center;
        }
      }
    }

    &.faves {
      width: 100%;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
          display: flex;
          flex-direction: flex-row;
          align-items: center;
          justify-content: space-around;
          border: none;
          padding: 2rem;

          img {
            padding: 0 0.4rem 0 0;
          }
        }
      }
    }
  }
`;

export const Tools = () => {
  return (
    <ToolsSection>
      <h3>My Toolbelt:</h3>

      <div className="tools faves">
        <h4>
          Currently{' '}
          <span role="img" aria-label="heart">
            💗
          </span>'s:
        </h4>
        <ul>
          <li>
            <img src={ReactLogo} alt="ReactJS" />
            <p>React.js</p>
          </li>

          <li>
            <img src={GatsbyLogo} alt="GatsbyJS" />
            <p>Gatsby.js</p>
          </li>

          <li>
            <img src={GraphQLogo} alt="GraphQL" />
            <p>GraphQL</p>
          </li>
          <li>
            <img src={NodeLogo} alt="NodeJS" />
            <p>Node.js</p>
          </li>
        </ul>
      </div>

      <div className="tools sub js">
        {/*  eslint-disable-next-line */}
        <h4>Javascript:</h4>
        <ul>
          <li>
            <p>ES6/ES7</p>
          </li>

          <li>
            <p>Redux</p>
          </li>

          <li>
            <p>Express.js</p>
          </li>

          <li>
            <p>GraphQL and RESTful APIs (creation + usage)</p>
          </li>

          <li>
            <p>Testing: Jest, Mocha</p>
          </li>

          <li>
            <p>
              APIs: Axios, Moment.js, Stripe API, Sendgrid API, Mailchimp API,
              Twitch API, Reddit API, Discord API, DarkSky, much more
            </p>
          </li>
        </ul>
      </div>

      <div className="tools sub html">
        <h4>HTML & CSS</h4>
        <ul>
          <li>
            <p>HTML5 & CSS3</p>
          </li>
          <li>
            <p>Responsive design</p>
          </li>
          <li>
            <p>Preprocessors: SASS & LESS</p>
          </li>
          <li>
            <p>Frameworks: Bootstrap, Bulma, Materialize</p>
          </li>
          <li>
            <p>Familiar with accessibility techniques</p>
          </li>
          <li>
            <p>Familiar with BEM</p>
          </li>
        </ul>
      </div>

      <div className="tools workflow">
        <h4>Build & Workflow</h4>
        <ul>
          <li>
            <p>Github, Bitbucket</p>
          </li>

          <li>
            <p>Webpack, Parcel</p>
          </li>

          <li>
            <p>Yarn/NPM</p>
          </li>

          <li>
            <p>CLI familiarity (Windows and Linux)</p>
          </li>

          <li>
            <p>Browser debugging via Dev Tools</p>
          </li>

          <li>
            <p>
              <span role="img" aria-label="heart">
                💗
              </span>{' '}
              Netlify
            </p>
          </li>

          <li>
            <p>Alternate Hosting: DigitalOcean, Heroku</p>
          </li>
        </ul>
      </div>

      <div className="tools sub prevgen">
        <h4>Also Years Of:</h4>
        <ul>
          <li>
            <p>Communication Skills</p>
          </li>
          <li>
            <p>PHP & MySql</p>
          </li>
          <li>
            <p>jQuery, MooTools</p>
          </li>
          <li>
            <p>WordPress</p>
          </li>
          <li>
            <p>CakePHP</p>
          </li>
          <li>
            <p>Grunt/Gulp/Bower</p>
          </li>
        </ul>
      </div>
    </ToolsSection>
  );
};

export default Tools;
