import React, { useState, useEffect, useRef } from "react";

import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

import {
  SkillsItem,
  MainContainer,
  SkillsList,
  Header,
  Text,
  Paragraph,
  RotatingDiv,
  RotatingP,
  RotatingSpan
} from "./Skills.styled";

import { Wave1, Wave2 } from "./Wave";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "LESS",
    "Node.js",
    "Express.js",
    "Redux.js",
    "Python",
    "Styled Components",
    "SQL",
    "RESTful APIs",
    "Git",
    "JSON",
    "Context API",
    "Socket.io",
    "Heroku",
    "PostgreSQL"
  ];

  // const colors = ["#e74c3c", "#8e44ad", "#3498db", "#2ecc71", "#f1c40f"];

  // const [enteringSkill, setEnteringSkill] = useState(skills[0]);
  // const [exitingSkill, setExitingSkill] = useState(skills[1]);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(_ => {
  //     setIndex1((index1 + 1) % skills.length);
  //   }, 4000);
  //   return _ => clearInterval(interval);
  // });

  // useEffect(() => {
  //   const interval = setInterval(_ => {
  //     setIndex2((index2 + 1) % skills.length);
  //   }, 4000);
  //   return _ => clearInterval(interval);
  // });

  setTimeout(() => {
    setIndex1((index1 + 1) % skills.length);
    setIndex2((index2 + 1) % skills.length);
  }, 4000);

  // setTimeout(() => {

  //   console.log("index2", index2);
  // }, 4000);
  // console.log("outside");
  return (
    <MainContainer>
      <Header>SKILLS & EXPERIENCE</Header>
      <Paragraph>
        I am constantly motivated to learn about the latest technologies for
        both the frontend or backend. With a very diverse educational background
        and cultural experiences I work exceptionally well within a team
        environment.
      </Paragraph>

      <div className="rotating-text">
        <p style={{ marginRight: "7px" }}>My skills include </p>
        <p>
          <Wave1 text={skills[index1]} />
          <Wave2 text={skills[index2]} />
        </p>
      </div>
    </MainContainer>
  );
};

export default Skills;
