import React from "react";
import { PageTitle, SubTitle, SkillsItem, Paragraph, SmallSubTitle, MainContainer } from './About.styled'

const About = () => {
  const skills = ["JavaScript", "React", "HTML", "CSS", "LESS", "React Router", "Node JS", "Express", "Redux", "Material UI", "styled-components", "SQL", "RESTful APIs", "Git", "JSON", "Context API"]
  return (
    <MainContainer>
      <PageTitle>About me</PageTitle>
      <Paragraph>
      Sweet sesame snaps liquorice wafer. Lollipop halvah chocolate cake cheesecake. Bonbon dragée chocolate sweet chocolate tootsie roll.
      </Paragraph>
      <Paragraph>
      Croissant cookie danish powder caramels sweet cookie chocolate bar dragée. Cake icing cotton candy halvah cake gummies candy canes. Chocolate bonbon cookie cookie dragée marzipan halvah tootsie roll. Gingerbread carrot cake sugar plum chocolate bar danish lollipop.
      </Paragraph>
      <section>
        <SubTitle>Skills</SubTitle>
        <Paragraph>
          Cupcake ipsum dolor sit amet wafer gingerbread tart. Chupa chups caramels fruitcake. Bonbon cookie croissant gingerbread macaroon sugar plum soufflé. Marshmallow lollipop cupcake toffee.
        </Paragraph>
        <SmallSubTitle>I've worked with...</SmallSubTitle>
        <ul>
          {skills.map(skill => {
            return (
              <SkillsItem key={skill}>{skill}</SkillsItem>
            )
          })}
        </ul>
      </section>
    </MainContainer>
  );
};

export default About;
