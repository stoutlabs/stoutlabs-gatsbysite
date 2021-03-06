import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { RecentItem } from "./RecentItem";
import { DetailsBox } from "./DetailsBox";

const StyledRecents = styled.section`
  div.recents-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: baseline;
    }
  }

  p.other-projects {
    font-size: 0.95rem;
    text-align: center;
    font-style: italic;
    padding-top: 2rem;
    opacity: 0.8;
  }
`;

const ProjectOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 90;
  background-color: #141313;
  visibility: hidden;
  opacity: 0.4;
  transition: visibility 1ms linear 550ms, opacity 200ms ease-in 350ms;

  &.show {
    visibility: visible;
    opacity: 0.9;
    transition: visibility 1ms linear 1ms, opacity 200ms ease-in 1ms;
  }
`;

export const RecentsList = ({ projects }) => {
  // const [projects, setProjects] = useState([]);
  const [isViewing, setIsViewing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeDetails, setActiveDetails] = useState(null);

  useEffect(() => {
    // setProjects(projects);
    if (projects.length > 0) {
      setIsLoaded(true);
      setActiveDetails(projects[0].description);
    }
  }, [projects]);

  const handleClick = (slug, details = null) => {
    setActiveItem(slug);
    setIsViewing(true);
    setActiveDetails(details);
  };

  const hideDetails = () => {
    setActiveItem(null);
    setIsViewing(false);
  };

  return (
    <StyledRecents id="projects">
      <h3>Recent Projects</h3>

      <p>
        Below are several of my <i>public-facing</i> projects. Please keep in
        mind that much of my work is <b>privately</b> contracted, and is under
        NDA and/or not publicly accessible.
      </p>

      <div className="recents-list">
        {isLoaded &&
          projects.map((itemRaw, index) => {
            const item = itemRaw;
            const { slug } = itemRaw.slug;

            return (
              <RecentItem
                isActive={activeItem === slug}
                key={index}
                details={item}
                slug={slug}
                handleClick={handleClick}
              />
            );
          })}
      </div>

      <p className="other-projects">
        <sup>*</sup>Note: Older projects (mostly WordPress and CakePHP)
        available upon request.
      </p>

      <ProjectOverlay
        className={isViewing ? "show" : "hide"}
        onClick={hideDetails}
      />
      <DetailsBox
        details={activeDetails}
        className={isViewing ? "active" : ""}
        handleClose={hideDetails}
      />
    </StyledRecents>
  );
};

export default RecentsList;
