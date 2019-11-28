import React from "react";
import "./App.css";
import NavBar from "./Shared_Styles/Navigation/NavBar";
import AppRouter from "./Components/AppRouter/AppRouter";
import styled from "styled-components";

function App() {
  return (
    <>
      <NavBar />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
      </div>
    </>
  );
}

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default App;
