import React from "react";
import { NavLink } from "react-router-dom";
import { colors, fonts } from "../Style_Variables/colors";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser, faEye, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <Nav>
      <LinksList>
        <ListItem>
          <StyledNavLink activeClassName="active" exact to="/">
            <IconSpan>
              <ion-icon name="home-outline"></ion-icon>
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">HOME</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/skills">
            <IconSpan>
              <ion-icon name="person-outline"></ion-icon>
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">ABOUT</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/work">
            <IconSpan>
              <ion-icon name="eye-outline"></ion-icon>
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">WORK</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/contact">
            <IconSpan>
              <ion-icon name="mail-outline"></ion-icon>
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">CONTACT</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <a href="https://drive.google.com/uc?export=download&id=1rqoT8BydMdC78XfOn7WaMiW1qsG5TW2L">
            <IconSpan>
              <ion-icon name="document-outline"></ion-icon>
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">RESUME</LinkText>
            </TextSpan>
          </a>
        </ListItem>
      </LinksList>
      <BottomLinks>
        <ListItem>
          <a href="https://github.com/czclaxton" target="_blank">
            <IconSpanBottom>
              <ion-icon
                style={{ fontSize: "18px" }}
                name="logo-github"
              ></ion-icon>
            </IconSpanBottom>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/connor-claxton-958358184/"
            target="_blank"
          >
            <IconSpanBottom>
              <ion-icon
                style={{ fontSize: "18px" }}
                name="logo-linkedin"
              ></ion-icon>
            </IconSpanBottom>
          </a>
        </ListItem>
      </BottomLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${colors.dark};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  width: 70px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

const BottomLinks = styled.ul`
  position: absolute;
  bottom: 20px;
  // left: 8px;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const LinksList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  box-sizing: border-box;
`;

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.navRegular};
  font-size: 2.25em;
  position: relative;
  top: 0.8rem;
  transition: opacity 0.3s ease-out;

  ${ListItem}:hover & {
    opacity: 0;
  }
`;

const IconSpanBottom = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.navRegular};
  font-size: 2.25em;
  position: relative;
  top: 0.8rem;
  transition: color 0.3s ease-out;

  ${ListItem}:hover & {
    color: ${colors.primary};
  }
`;

const TextSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  font-family: ${fonts.body};
  position: relative;
  opacity: 0;
  top: -1rem;
  align-self: center;
  box-sizing: border-box;

  ${ListItem}:hover & {
    color: ${colors.primary};
    opacity: 1;
    text-align: center;
    transition: opacity 0.3s ease-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    ${IconSpan} {
      color: ${colors.primary};
    }
  }
`;

export default NavBar;
