import styled from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  margin: 0 0 0 14rem;
`;

export const DisplayContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 117rem;
  margin: 10px;
`;

export const Header = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin: 25px auto;
`;

// MOBILE COMPONENTS

export const MainContainerMobile = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 0 0 14rem;
  position: absolute;
  top: 850px;
  left: 0;
`;

export const DisplayContainerMobile = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // margin: 30px 10px 10px 10px;
`;

export const HeaderMobile = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 50px auto;
`;
