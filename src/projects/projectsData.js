import React from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "SoMe Platform",
    image: projectOne,
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
  2: {
    title: "Productivity App",
    image: projectTwo,
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
