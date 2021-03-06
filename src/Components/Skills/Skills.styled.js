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
  margin: 5rem;
  width: 18rem;
  display: inline-block;
  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  font-size: 2rem;
  font-family: ${fonts.body};
  border: 2px solid ${colors.primary};
  background: none;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  color: ${colors.primary};
  align-self: center;
  letter-spacing: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.dark}
    transition: all 0.3s ease;
  }


  // margin: 1rem;
  // display: inline-block;
  // padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  // font-size: 2rem;
  // font-family: ${fonts.body};
  // border: 2px solid ${colors.text};
  // background: none;
  // border-radius: 0.3rem;
  // transition: all 0.3s ease;
  // color: ${colors.primary};
  // align-self: flex-end;

  // &:hover {
  //   cursor: pointer;
  //   background-color: ${colors.primary};
  //   color: ${colors.dark}
  //   transition: all 0.3s ease;
  // }
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

export const RotatingDiv = styled.div`
  font-family: ${fonts.title};
  font-weight: 600;
  font-size: 36px;
  color: white;
  transform: translateX(-80px);
`;
export const RotatingP = styled.p`
  display: inline-flex;
  margin: 0;
  vertical-align: top;

  .word {
    position: absolute;
    display: flex;
    opacity: 0;

    .letter {
      transform-origin: center center 25px;

      &.out {
        transform: rotateX(90deg);
        transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
      }
      &.in {
        transition: 0.38s ease;
      }
      &.behind {
        transform: rotateX(-90deg);
      }
    }
  }
`;

export const RotatingSpan = styled.span`
  color: ;
`;
