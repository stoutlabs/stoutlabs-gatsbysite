import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }

  a {
    margin: 0 0 0 0.66rem;
    color: #fef1f1;
    font-size: 1.6rem;
    opacity: 0.9;
    transition: linear opacity 200ms;
    max-width: 50px;

    &:hover {
      opacity: 0.8;
    }

    svg {
      max-width: 30px;
    }
  }
`;

const myIcons = [
  {
    title: "Github",
    href: "https://github.com/stoutlabs",
    icon: faGithub,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/stoutlabs",
    icon: faTwitter,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dstout/",
    icon: faLinkedin,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/stoutlabs/",
    icon: faFacebook,
  },
  {
    title: "Spotify",
    href: "https://open.spotify.com/user/stoutlabs?si=ziVoZ3QETdymrtBg5pcpwQ",
    icon: faSpotify,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: faPenSquare,
  },
  {
    title: "Email",
    href: "mailto:daniel@stoutlabs.com",
    icon: faEnvelope,
  },
];

export const SocialIcons = () => {
  const renderIcons = myIcons.map((icon, index) => {
    if (icon.title === "Email") {
      return (
        <a href={icon.href} title={icon.title} key={index}>
          <FontAwesomeIcon icon={icon.icon} />
        </a>
      );
    }

    if (icon.title === "Blog") {
      return (
        <Link to={icon.href} title={icon.title} key={index}>
          <FontAwesomeIcon icon={icon.icon} />
        </Link>
      );
    }

    return (
      <a href={icon.href} target="blank" rel="noopener noreferrer" title={icon.title} key={index}>
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    );
  });

  return <StyledIcons className="social-icons">{renderIcons}</StyledIcons>;
};

export default SocialIcons;
