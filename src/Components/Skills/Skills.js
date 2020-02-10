import React, { useState } from "react";
import {
  colors,
  fonts,
  device
} from "../../Shared_Styles/Style_Variables/colors";

import {
  SkillsItem,
  MainContainer,
  SkillsList,
  Header,
  Text,
  Paragraph,
  RotatingDiv,
  RotatingP,
  RotatingSpan
} from "./Skills.styled";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "LESS",
    "Node.js",
    "Express.js",
    "Redux.js",
    "Python",
    "Styled Components",
    "SQL",
    "RESTful APIs",
    "Git",
    "JSON",
    "Context API",
    "Socket.io"
  ];

  // const colors = [
  //   { alizarin: "#e74c3c" },
  //   { wisteria: "#8e44ad" },
  //   { peterRiver: "#3498db" },
  //   { emerald: "#2ecc71" },
  //   { sunFlower: "#f1c40f" }
  // ];

  // const [div, setDiv] = useState("rotating-text");
  // const [span, setSpan] = useState(`word `);

  // let words = skills;
  // console.log(words);
  // words.forEach(word => {
  //   let letters = word.split("");
  //   word = "";
  //   console.log('word', word)
  //   letters.forEach(letter => {
  //     let spanEl = React.createElement("span");
  //     spanEl = letter;
  //     setSpan(`letter`)
  //     word += spanEl;
  //   });
  // });

  // let currentWordIndex = 0;
  // let maxWordIndex = words.length - 1;
  // words[currentWordIndex].style.opacity = "1";

  // let rotateText = () => {
  //   let currentWord = words[currentWordIndex];
  //   let nextWord =
  //     currentWordIndex === maxWordIndex
  //       ? words[0]
  //       : words[currentWordIndex + 1];
  //   // rotate out letters of current word
  //   Array.from(currentWord.children).forEach((letter, i) => {
  //     setTimeout(() => {
  //       letter.className = "letter out";
  //     }, i * 80);
  //   });
  //   // reveal and rotate in letters of next word
  //   nextWord.style.opacity = "1";
  //   Array.from(nextWord.children).forEach((letter, i) => {
  //     letter.className = "letter behind";
  //     setTimeout(() => {
  //       letter.className = "letter in";
  //     }, 340 + i * 80);
  //   });
  //   currentWordIndex =
  //     currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  // };

  // rotateText();
  // setInterval(rotateText, 4000);

  return (
    <MainContainer>
      <Header>SKILLS & EXPERIENCE</Header>
      <Paragraph>
        I am constantly motivated to learn about the latest technologies for
        both the frontend or backend. With a very diverse educational background
        and cultural experiences I work exceptionally well within a team
        environment.
      </Paragraph>

      {/* <div className={`${div}`}>
        <p>My skills include</p>
        <p>
          <span class="word alizarin">awesome.</span>
          <span class="word wisteria">beautiful.</span>
          <span class="word peter-river">creative.</span>
          <span class="word emerald">fabulous.</span>
          <span className={`${span} sun-flower`}>interesting.</span>
        </p>
      </div> */}
      {/* <Text>I've worked with...</Text>
      <SkillsList>
        {skills.map(skill => {
          return <SkillsItem key={skill}>{skill}</SkillsItem>;
        })}
      </SkillsList> */}
    </MainContainer>
  );
};

export default Skills;
