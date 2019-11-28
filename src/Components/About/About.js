import React from "react";
import { MainContainer, Header } from "./About.styled";
import { Paragraph } from "../../Shared_Styles/TextStyles";
import SvgAboutMeTitle from "../../Shared_Styles/SVGs/AboutMeTitle";

const About = () => {
  return (
    <MainContainer>
      <div>
        <Header>ABOUT</Header>

        <Paragraph>
          Sweet sesame snaps liquorice wafer. Lollipop halvah chocolate cake
          cheesecake. Bonbon dragée chocolate sweet chocolate tootsie roll.
        </Paragraph>
        <Paragraph>
          Croissant cookie danish powder caramels sweet cookie chocolate bar
          dragée. Cake icing cotton candy halvah cake gummies candy canes.
          Chocolate bonbon cookie cookie dragée marzipan halvah tootsie roll.
          Gingerbread carrot cake sugar plum chocolate bar danish lollipop.
        </Paragraph>
      </div>
    </MainContainer>
  );
};

export default About;
