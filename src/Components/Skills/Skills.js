import React from "react";
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
    "Socket.io"
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

      <div class="rotating-text">
        <p>CSS Animation is</p>
        <p>
          <span class="word alizarin">awesome.</span>
          <span class="word wisteria">beautiful.</span>
          <span class="word peter-river">creative.</span>
          <span class="word emerald">fabulous.</span>
          <span class="word sun-flower">interesting.</span>
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
