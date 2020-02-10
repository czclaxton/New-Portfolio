import styled from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  /* HIDING SCROLL BAR */
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  font-family: ${fonts.title};
`;

export const Button = styled.button`
  margin: 5rem;
  width: 18rem;
  display: inline-block;
  padding: 1rem 1.5rem 1rem 1.5rem;
  font-size: 2rem;
  font-family: ${fonts.body};
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  background: none;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  align-self: flex-end;
 

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.dark}
    transition: all 0.3s ease;
    
  }
`;

export const Text = styled.h3`
  color: ${colors.text};
  font-family: ${fonts.title};
  font-size: 4.5rem;
  text-align: center;
  line-height: 5rem;
`;
