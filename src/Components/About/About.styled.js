import styled from "styled-components";
import {
  colors,
  randomColor,
  fonts,
  device
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 60%;
  height: 90vh;
  overflow-y: scroll;
  /* HIDING SCROLL BAR */
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Header = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin: 25px auto;
`;
