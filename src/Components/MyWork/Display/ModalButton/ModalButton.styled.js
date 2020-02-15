import styled from "styled-components";
import { HoverDiv } from "../Display.styled";
import {
  colors,
  randomColor,
  fonts,
  device
} from "../../../../Shared_Styles/Style_Variables/colors";

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-style: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
  }
`;

export const CloseIcon = styled.div`
  position: relative;
  width: 25px;
  height: 22px;
  border-style: none;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 23px;
    width: 0.15rem;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  ${CloseButton}:hover & {
    &:before,
    &:after {
      background-color: ${colors.primary};
    }
  }
`;
export const ProjectInfo = styled.div`
  padding: 2rem;
  width: 95%;
  height: 28rem;
  background-color: #1f2833;
`;
export const Title = styled.h3`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 3rem;
  font-weight: 700;
`;
export const Skills = styled.h5`
  color: ${colors.text};
  font-family: ${fonts.title};
  font-size: 2rem;
  line-height: 2.75rem;
`;
export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1.6rem;
  line-height: 2.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const LearnMore = styled.button`
  margin: 2rem;
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
  letter-spacing: 3px;
  transition: opacity 1.2s, transform 0.5s ease 0s;
  ${HoverDiv}:hover & {
    opacity: 1;
    transform: translateY(-60px);
    transition: opacity 1.2s, transform 0.5s ease 0s, background-color 0.5s ease;
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.dark}
    transition: all 0.3s ease;
  }
`;
export const ButtonsDiv = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 1.5rem;
`;
export const LinkButton = styled.button`
  margin: 1rem;
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
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.dark}
    transition: all 0.3s ease;
  }
`;
