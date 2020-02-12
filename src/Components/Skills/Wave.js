import React, { useState } from "react";
import { Wave } from "react-animated-text";

export const Wave1 = props => {
  const { text, color1 } = props;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        color: color1
      }}
    >
      <Wave
        text={text}
        effect="verticalFadeIn"
        effectChange={3.0}
        effectDirection="up"
        delay={4}
      />
    </div>
  );
};

export const Wave2 = props => {
  const { text, color2 } = props;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        color: color2
      }}
    >
      <Wave
        text={text}
        effect="verticalFadeOut"
        effectChange={3.0}
        effectDirection="down"
        delay={4}
        speed={20}
      />
    </div>
  );
};
