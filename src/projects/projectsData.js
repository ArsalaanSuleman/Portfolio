import React from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "KnowYourCrypto",
    image: projectOne,
    description: (
      <React.Fragment>
        <p>
          Her kan du søke og finne kryptovaluta. Det er også mulig å legge til
          nye kryptoer. (Backend: C#, Frontend: React-TypeScript)
        </p>
      </React.Fragment>
    ),
  },
  2: {
    title: "KarriereKobling",
    image: projectTwo,
    description: (
      <React.Fragment>
        <p>
          En kunstig intelligens løsning, som kan hjelpe studenter med å skrive
          skredderskydde søknader og cv-er samt hjelpe med Linkedin profilen og
          intervju.
        </p>
      </React.Fragment>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <React.Fragment>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </React.Fragment>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
