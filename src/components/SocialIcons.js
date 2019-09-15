import React from "react";
import { Link } from "gatsby";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaSpotify,
  FaEnvelope,
  FaPenSquare,
} from "react-icons/fa";
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
    icon: <FaGithub />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/stoutlabs",
    icon: <FaTwitter />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dstout/",
    icon: <FaLinkedin />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/stoutlabs/",
    icon: <FaFacebook />,
  },
  {
    title: "Spotify",
    href: "https://open.spotify.com/user/stoutlabs?si=ziVoZ3QETdymrtBg5pcpwQ",
    icon: <FaSpotify />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <FaPenSquare />,
  },
  {
    title: "Email",
    href: "mailto:daniel@stoutlabs.com",
    icon: <FaEnvelope />,
  },
];

export const SocialIcons = () => {
  const renderIcons = myIcons.map((icon, index) => {
    if (icon.title === "Email") {
      return (
        <a href={icon.href} title={icon.title} key={index}>
          <FaEnvelope />
        </a>
      );
    }

    if (icon.title === "Blog") {
      return (
        <Link to={icon.href} title={icon.title} key={index}>
          <FaPenSquare />
        </Link>
      );
    }

    return (
      <a
        href={icon.href}
        target="blank"
        rel="noopener noreferrer"
        title={icon.title}
        key={index}
      >
        {icon.icon}
      </a>
    );
  });

  return <StyledIcons className="social-icons">{renderIcons}</StyledIcons>;
};

export default SocialIcons;
