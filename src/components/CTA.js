import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

import Scroll from "./Scroll";

const CTAdiv = styled.div`
  margin: 0;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    background: #971640;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-family: "Merriweather", sans-serif;
    padding: 1.25rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    transition: background-color 200ms ease-out;
    max-width: 300px;

    &:hover {
      color: #fef1f1;
      background-color: #e95c54;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
`;

export const CTA = ({ url, title, isAnchor, element }) => {
  if (isAnchor) {
    return (
      <CTAdiv>
        <Scroll type="id" element={element} offset={0}>
          <a href={url}>
            {title} <FaArrowDown />
          </a>
        </Scroll>
      </CTAdiv>
    );
  }
  return (
    <CTAdiv>
      <Link to={url}>
        {title} <FaArrowDown />
      </Link>
    </CTAdiv>
  );
};

CTA.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isAnchor: PropTypes.bool,
  element: PropTypes.any,
};

export default CTA;
