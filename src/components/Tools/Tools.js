import React from "react";
import styled from "styled-components";

import { MarkdownContent } from "../Content";
import Img from "../Image";

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
      padding: 1.2rem 1rem;
      margin: 0 0 0.4rem;
      font-size: 1rem;
      color: #d7eff3;
      text-align: center;
      text-transform: uppercase;

      @media and (min-width: 768px) {
        font-size: 1.1rem;
        padding: 1.6rem 1.4rem;
      }
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
        padding: 0.3rem 0.5rem;
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 0.5rem;
        line-height: 1.4;
        text-align: center;
        font-size: 0.95rem;
        color: #216571;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        @media (min-width: 768px) {
          padding: 0.5rem 1rem;
          line-height: 1.5;
          font-size: 1rem;
        }

        &:last-child {
          border-bottom: none;
        }

        img {
          max-width: 40px;
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

          p {
            margin: 0;
            line-height: 1.4;
            text-align: center;
            font-size: 0.95rem;
            color: #216571;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;

            @media (min-width: 768px) {
              line-height: 1.5;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

export const Tools = ({ content }) => {
  const { faves } = content;
  const { boxes } = content;
  // console.log("Tools -> boxes", boxes);

  return (
    <ToolsSection id="tools">
      <h3>My Toolbelt:</h3>

      <div className="tools faves">
        <h4>
          Currently{" "}
          <span role="img" aria-label="heart">
            💗
          </span>
          s:
        </h4>
        <ul>
          {faves.map((item) => (
            <li key={item.title}>
              <Img
                fixed={item.icon && item.icon.childImageSharp.fixed}
                // src={!item.logo.localFile && item.logo.url}
              />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>

      {boxes &&
        boxes.map((box) => {
          const boxContent = box.listing;
          return (
            <div className="tools sub" key={box.Heading}>
              <h4>{box.Heading}</h4>
              <MarkdownContent content={boxContent} />
            </div>
          );
        })}
    </ToolsSection>
  );
};

export default Tools;
