import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CTAdiv = styled.div`
  margin: 0;
  padding: 1.5rem 0;

  a {
    border: 2px solid #febcb8;
    background: #971640;
    border-radius: 8px;
    color: #febcb8;
    display: inline-block;
    font-size: 1.3rem;
    font-family: 'Merriweather', sans-serif;
    padding: 1.25rem 2.75rem;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;

    &:hover {
      color: #fef1f1;
      border-color: #fef1f1;
      background-color: #e95c54;
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
