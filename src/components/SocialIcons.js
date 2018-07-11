import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledIcons = styled.div`
  a {
    margin: 0 0.75rem 0 0;
    color: #fef1f1;
    font-size: 1.25rem;
    opacity: 0.85;
    transition: opacity 200ms ease-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const SocialIcons = () => {
  return (
    <StyledIcons className="social-icons">
      <a
        href="https://github.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://twitter.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/stoutlabs"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="mailto:daniel@stoutlabs.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </StyledIcons>
  );
};

export default SocialIcons;
