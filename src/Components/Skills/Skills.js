import React from "react";
import {
  SkillsItem,
  MainContainer,
  SkillsList,
  Header,
  Text,
  Paragraph
} from "./Skills.styled";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "LESS",
    "Node.js",
    "Express",
    "Redux.js",
    "Python",
    "Styled Components",
    "SQL",
    "RESTful APIs",
    "Git",
    "JSON",
    "Context API",
    "Socket.io",
    "Test"
  ];

  return (
    <MainContainer>
      <Header>SKILLS & EXPERIENCE</Header>
      <Paragraph>
        I am constantly motivated to learn about the latest technologies for
        both the frontend or backend. With a very diverse educational background
        and cultural experiences I work exceptionally well within a team
        environment.
      </Paragraph>
      <Text>I've worked with...</Text>
      <SkillsList>
        {skills.map(skill => {
          return <SkillsItem key={skill}>{skill}</SkillsItem>;
        })}
      </SkillsList>
    </MainContainer>
  );
};

export default Skills;
