import React from "react";
import { Link } from "react-router-dom";

import { MainContainer, Button, Text } from "./Home.styled";
import { Paragraph, SmallSubTitle } from "../../Shared_Styles/TextStyles";

const Home = () => {
  return (
    <MainContainer>
      <Text>
        Hello, I'm <span style={{ color: "#66fcf1" }}>Connor Claxton</span>.
        <br /> I'm a full-stack web developer.
      </Text>

      <Link to="/work">
        <Button>VIEW MY WORK</Button>
      </Link>
    </MainContainer>
  );
};

export default Home;
