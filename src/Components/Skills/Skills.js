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
    "React.js",
    "Redux.js",
    "CSS",
    "Python",
    "Node.js",
    "Express.js",
    "HTML",
    "LESS",
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

  const colorsArray = [
    "#f1c40f",
    "#3498db",
    "#4343f2",
    "#006DBA",
    "#fcd934",
    "#73BA55",
    "#ADA7FC",
    "#fc5d3d",
    "#3db0f5",
    "#E093D2",
    "#2ecc71",
    "#D70031",
    "#F05033",
    "#E2FBF8",
    "#0B98F4",
    "#FFFFFF",
    "#79589F",
    "#305E8E"
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [color1, setColor1] = useState(colorsArray[0]);
  const [color2, setColor2] = useState(colorsArray[1]);

  setTimeout(() => {
    setIndex1((index1 + 1) % skills.length);
    setIndex2((index2 + 1) % skills.length);
    setColor1(colorsArray[index2 % colorsArray.length]);
    setColor2(colorsArray[index1 % colorsArray.length]);
  }, 4000);

  return (
    <MainContainer>
      <Header>SKILLS & EXPERIENCE</Header>
      <Paragraph>
        I am constantly motivated to learn about the latest technologies for
        both the frontend or backend. With a very diverse educational background
        and cultural experiences I work exceptionally well within a team
        environment.
      </Paragraph>

      <div style={{}} className="rotating-text">
        <p style={{ marginRight: "10px" }}>My skills include </p>
        <p>
          <Wave1 color1={color1} text={skills[index2]} />
          <Wave2 color2={color2} text={skills[index1]} />
        </p>
      </div>
    </MainContainer>
  );
};

export default Skills;
