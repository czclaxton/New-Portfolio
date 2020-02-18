import React from "react";
import "./App.css";
import NavBar from "./Shared_Styles/Navigation/NavBar";
import AppRouter from "./Components/AppRouter/AppRouter";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)"
  });

  return (
    <>
      <NavBar />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
      {isMobile ? (
        <></>
      ) : (
        <div className="night">
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>
      )}
    </>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default App;
