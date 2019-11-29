import styled from "styled-components";
import {
  colors,
  fonts,
  device
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 90vh;
  margin: auto;
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
  margin-bottom: 25px;
`;

// SKILLS SECTION
export const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 80%;
  padding: 1rem;
  padding: 1rem;
  display: flex;
  text-align: center;
  align-items: flex-end;
  flex-flow: row wrap;
`;

export const SkillsItem = styled.button`
  margin: 1rem;
  display: inline-block;
  padding: 1.25rem;
  font-size: 2rem;
  font-family: ${fonts.body};
  border: 2px solid ${colors.text};
  background: none;
  border-radius: 0.3rem;
  transition: all 1s ease;
  color: ${colors.text};
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    color: ${colors.primary};
    transition: all 0.2s ease;
    border: 2px solid ${colors.primary};
  }
`;

export const Text = styled.h3`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 3rem;
  text-align: center;
  line-height: 5rem;
  margin: 25px auto;
`;

export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1.8rem;
  line-height: 2.75rem;
  padding: 1rem;
  margin: 1rem;
  width: 75%;
`;
