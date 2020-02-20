import React, { useState, useEffect } from "react";
import DisplayCard from "./Display/DisplayCard";
import { useMediaQuery } from "react-responsive";

import { Modal } from "styled-react-modal";
import {
  MainContainer,
  DisplayContainer,
  Header,
  MainContainerMobile,
  DisplayContainerMobile,
  HeaderMobile
} from "./MyWork.styled";
import { projects } from "./projects";

const MyWork = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedSkill, setSelectedSkill] = useState("All");

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)"
  });

  return (
    <>
      {isMobile ? (
        <MainContainerMobile>
          <HeaderMobile>PROJECTS</HeaderMobile>
          <DisplayContainerMobile>
            {projectList.map((project, i) => {
              return <DisplayCard key={i} project={project} />;
            })}
          </DisplayContainerMobile>
        </MainContainerMobile>
      ) : (
        <MainContainer>
          <Header>PROJECTS</Header>
          <DisplayContainer>
            {projectList.map((project, i) => {
              return <DisplayCard key={i} project={project} />;
            })}
          </DisplayContainer>
        </MainContainer>
      )}
    </>
  );
};

export default MyWork;
