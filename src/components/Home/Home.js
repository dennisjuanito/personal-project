import React, { Component } from 'react'
import axios from "axios";
import dotenv from "dotenv";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import Stepper from "./Stepper.js";
import {checkUserSession} from "../../ducks/reducers/checkSessionReducer.js";
dotenv.config();

class Home extends Component {
  componentDidMount() {
    axios.get(`/api/check-session`).then(response => {
      this.props.checkUserSession(response.data);
      console.log(response.data);
    });
  }
  render() {
    let {SERVER_PORT} = process.env;
    console.log(this.props);
    console.log(SERVER_PORT);
    let {user} = this.props.checkSessionReducer;
    console.log(user);
    return (
      <div>
          
         
          {
            user.auth_id ? (
              <div>
              <p>Home</p>
              <a href={`/api/logout`}><Button>logout</Button></a>
              </div>
       
            ): (<p>Please log in!!!</p>)
          }
                 <Stepper />
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, {checkUserSession})(Home);
