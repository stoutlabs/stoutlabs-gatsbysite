import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CTAdiv = styled.div`
  margin: 0;
  padding: 2rem 0;

  a {
    border: 2px solid #2a899a;
    border-radius: 8px;
    color: #2a899a;
    display: inline-block;
    font-size: 1.3rem;
    padding: 1.25rem 2.75rem;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #3a99aa;
      border-color: #3a99aa;
    }
  }
`;

export const CTA = ({ url, title }) => {
  return (
    <CTAdiv>
      <Link to={url}>{title}</Link>
    </CTAdiv>
  );
};

CTA.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CTA;
