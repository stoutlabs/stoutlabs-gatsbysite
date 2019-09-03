import React from 'react';
import styled from 'styled-components';

import Img from "../Image";

// import ReactLogo from '../../assets/images/react.svg';
// import GatsbyLogo from '../../assets/images/gatsby.svg';
// import NodeLogo from '../../assets/images/nodejs.svg';
// import GraphQLogo from '../../assets/images/graphql.svg';

// import myTheme from '../../utils/theme';

const ToolsSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: baseline;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  div.tools {
    margin: 0 1.5rem 1.5rem 0;
    padding: 0;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: calc(50% - 1.5rem);
    }

    h4 {
      background: linear-gradient(180deg, #3096a7, #216571 80%);
      padding: 1.6rem 1.4rem;
      margin: 0 0 0.4rem;
      font-size: 1.1rem;
      color: #d7eff3;
      text-align: center;
      text-transform: uppercase;
    }

    p {
      font-size: 0.95rem;
      color: #216571;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      li {
        background-color: #d7eff3;
        margin: 0.5rem;
        padding: 0.8rem 1rem;
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 0.5rem;

        &:last-child {
          border-bottom: none;
        }

        img {
          max-width: 40px;
        }

        p {
          margin: 0;
          line-height: 1.66;
          text-align: center;
          font-size: 1rem;
          color: #216571;
        }
      }
    }

    &.faves {
      background-color: #d7eff3;
      width: 100%;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          border: none;
          padding: 1rem;

          div.gatsby-image-wrapper {
            margin: 0 0.4rem 0 0;
          }
        }
      }
    }
  }
`;

export const Tools = ({ content }) => {
  const faves = content.faves.document.data;
  const boxes = content.boxes;

  return (
    <ToolsSection id="tools">
      <h3>My Toolbelt:</h3>

      <div className="tools faves">
        <h4>
          Currently{' '}
          <span role="img" aria-label="heart">
            💗
          </span>
          s:
        </h4>
        <ul>
          {faves.toolbelt_item.map(item => {
            return (
              <li key={item.tool_name}>
                {/* <img src={ReactLogo} alt="ReactJS" /> */}
                <Img
                  fixed={
                    item.logo.localFile && item.logo.localFile.childImageSharp.fixed
                  }
                  src={!item.logo.localFile && item.logo.url}
                />
                {/* <Img fluid={item.logo.localFile.childImageSharp.fluid} /> */}

                {/* <img src={item.logo.localFile.publicURL} alt={item.tool_name} /> */}
                <p>{item.tool_name}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {boxes.map(({ box }) => {
        const boxContent = box.document.data;
        return (
          <div className="tools sub" key={boxContent.toolbelt_title}>
            {/*  eslint-disable-next-line */}
            <h4>{boxContent.toolbelt_title}</h4>
            <ul>
              {boxContent.toolbelt_item.map(item => {
                return (
                  <li key={item.tool_name}>
                    <p>{item.tool_name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </ToolsSection>
  );
};

export default Tools;
