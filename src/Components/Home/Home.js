import React from "react";
import { Link } from "react-router-dom";

import { MainContainer, Button, Text } from "./Home.styled";
import { colors } from "../../Shared_Styles/Style_Variables/colors";

const Home = () => {
  return (
    <MainContainer>
      <Text>
        Hello, I'm{" "}
        <span style={{ color: `${colors.primary}` }}>Connor Claxton</span>.
        <br /> I'm a software web developer.
      </Text>

      <Link to="/work">
        <Button>VIEW MY WORK</Button>
      </Link>
    </MainContainer>
  );
};

export default Home;
