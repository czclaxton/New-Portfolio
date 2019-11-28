import React from "react";
import {
  SkillsItem,
  MainContainer,
  SkillsList,
  Header,
  Text
} from "./Skills.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";

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
    "Socket.io"
  ];

  return (
    <MainContainer>
      <Header>SKILLS</Header>
      <Paragraph>
        Cupcake ipsum dolor sit amet wafer gingerbread tart. Chupa chups
        caramels fruitcake. Bonbon cookie croissant gingerbread macaroon sugar
        plum soufflé. Marshmallow lollipop cupcake toffee.
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
