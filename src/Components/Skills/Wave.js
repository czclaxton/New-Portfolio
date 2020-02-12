import React from "react";
import { Wave } from "react-animated-text";

export const Wave1 = props => {
  const { text, setIndex1, index1 } = props;

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Wave
        text={text}
        effect="verticalFadeIn"
        effectChange={2.0}
        effectDirection="up"
        delay={4}
        effectDuration={4}
      />
    </div>
  );
};

export const Wave2 = props => {
  const { text, setIndex2, index1 } = props;

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Wave
        text={text}
        effect="verticalFadeOut"
        effectChange={2.0}
        effectDirection="down"
        delay={4}
        effectDuration={4}
      />
    </div>
  );
};
