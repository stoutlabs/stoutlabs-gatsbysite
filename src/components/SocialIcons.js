import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledIcons = styled.div`
  a {
    margin: 0 0.75rem 0 0;
    color: #fff;
    font-size: 1.25rem;
    opacity: 0.75;
  }
`;

export const SocialIcons = () => {
  return (
    <StyledIcons className="social-icons">
      <a
        href="https://github.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://github.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://github.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </StyledIcons>
  );
};

export default SocialIcons;
