import React, { useState, useEffect } from "react";
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

  const [div, setDiv] = useState("rotating-text");
  const [index, setIndex] = useState(0);

  const [currentSkill, setCurrentSkill] = useState(skills[index]);
  const [color, setColor] = useState();
  const [isVisible, setIsVisible] = useState(1);

  useEffect(() => {
    const interval = setInterval(_ => {
      setIndex((index + 1) % skills.length);
      setCurrentSkill(skills[index]);
    }, 3000);
    return _ => clearInterval(interval);
  });

  useEffect(() => {
    setColor(randomColor());
  }, [index]);

  let maxSkillsIndex = skills.length - 1;

  const rotateText = () => {
    Array.from(currentSkill).forEach((letter, i) => {
      setTimeout(() => {
        return <p className="rotatingText p word letter">{letter}</p>;
      }, i * 80);
    });

    setIsVisible(1);

    // Array.from();
  };

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
          <span
            style={{ color: color, opacity: isVisible }}
            className="word"
          >{`${skills[index]}`}</span>
        </p>
      </div>
      {/* <Text>I've worked with...</Text>
      <SkillsList>
        {skills.map(skill => {
          return <SkillsItem key={skill}>{skill}</SkillsItem>;
        })}
      </SkillsList> */}
    </MainContainer>
  );
};

export default Skills;
