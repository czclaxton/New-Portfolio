import React, { useState, useEffect } from "react";
import DisplayCard from "./Display/DisplayCard";

import { Modal } from "styled-react-modal";
import {
  MainContainer,
  DisplayContainer,
  FilterButton,
  FilterButtonWrapper,
  FilterButtonMenu,
  Header
} from "./MyWork.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";
import { projects } from "./projects";

const MyWork = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedSkill, setSelectedSkill] = useState("All");

  return (
    <MainContainer>
      <DisplayContainer>
        {projectList.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
