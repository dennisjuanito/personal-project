import React, { Component } from "react";
import dotenv from "dotenv";
import RegisterStepper from "./RegisterStepper.js";
import axios from "axios";
import {connect} from "react-redux";
import {checkUserSession} from "../../ducks/reducers/checkSessionReducer.js";

dotenv.config();

class Register extends Component {

  render() {
    return (
      <div>
        <RegisterStepper />
      </div>
    );
  }
}

export default Register;