import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  MainContainer,
  Button,
  Text,
  MainContainerMobile,
  ButtonMobile,
  TextMobile
} from "./Home.styled";
import { colors } from "../../Shared_Styles/Style_Variables/colors";

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)"
  });

  return (
    <>
      {isMobile ? (
        <MainContainerMobile>
          <TextMobile>
            Hello, I'm{" "}
            <span style={{ color: `${colors.primary}` }}>Connor Claxton</span>.
            <br /> I'm a full stack developer.
          </TextMobile>

          <Link to="/work">
            <ButtonMobile>VIEW MY WORK</ButtonMobile>
          </Link>
        </MainContainerMobile>
      ) : (
        <MainContainer>
          <Text>
            Hello, I'm{" "}
            <span style={{ color: `${colors.primary}` }}>Connor Claxton</span>.
            <br /> I'm a full stack developer.
          </Text>

          <Link to="/work">
            <Button>VIEW MY WORK</Button>
          </Link>
        </MainContainer>
      )}
    </>
  );
};

export default Home;
