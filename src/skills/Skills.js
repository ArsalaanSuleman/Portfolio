import React, { Component } from "react";
import Avatar from "../Avatar/Avatar.js";
import SkillsMenu from "./SkillsMenu.js";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Avatar page="skills" />
        <SkillsMenu />
      </React.Fragment>
    );
  }
}
