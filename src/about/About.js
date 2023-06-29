import React, { Component } from "react";
import Avatar from "../Avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <AboutMenu />
        <Avatar page="about" />
      </React.Fragment>
    );
  }
}
