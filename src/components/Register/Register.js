import React, { Component } from "react";
import dotenv from "dotenv";
import RegisterStepper from "./RegisterStepper.js";
import { Icon, Step, Button } from "semantic-ui-react";

dotenv.config();

export default class Register extends Component {
  render() {
    // let {SERVER_PORT} = process.env;
    // console.log(SERVER_PORT);
 
    return (
      <div>
        <RegisterStepper />
      </div>
    );
  }
}
