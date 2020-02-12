import styled, { keyframes } from "styled-components";
import { Field, Form } from "formik";
import {
  colors,
  fonts,
  randomColor,
  device
} from "../../Shared_Styles/Style_Variables/colors";
import { Paragraph } from "../../Shared_Styles/TextStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.center ? "center" : "space-around")};
  width: 100%;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  background-color: ${colors.text};
  border: none;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  ::placeholder {
    color: ${colors.secondary};
    font-family: ${fonts.body};
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const ParaInput = styled(Input)`
  height: 20rem;
  margin-left: 2rem;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  margin: 7rem 0 0 14rem;
  width: 60rem;
`;

export const Label = styled.label`
  color: ${colors.primary};
  font-family: ${fonts.body};
  font-size: 2rem;
  line-height: 2.75rem;
  margin: 1rem 0 1rem 2rem;
`;

export const Button = styled.button`
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
`;

export const ErrorText = styled.p`
  font-size: 1.4rem;
  color: ${colors.primary};
  // margin: -2rem;
  text-align: right;
  font-family: ${fonts.body};
`;

const iconAnim = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
100% {
    transform: translateY(0px);
  }
`;

const delays = [
  ".33s",
  ".66s",
  "1s",
  "1.33s",
  "1.66s",
  "2s",
  "2.33s",
  "2.66s",
  "3s",
  "3.33s"
];
export const Icon = styled(FontAwesomeIcon)`
  margin: 1.5rem;
  color: ${colors.primary};
  font-size: 1.6rem;
  opacity: 0.75;
  animation: ${iconAnim} 2s linear infinite;
  animation-delay: ${props => delays[props.order]};
  align-self: center;
`;

export const Header = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;
