import React, { Component } from 'react'
import axios from "axios";
import dotenv from "dotenv";
import {connect} from "react-redux";
import {checkUserSession} from "../../ducks/reducers/checkSessionReducer.js";
dotenv.config();

class Home extends Component {
  componentDidMount() {
    axios.get(`/api/check-session`).then(response => {
      this.props.checkUserSession(response.data);
      console.log(response;
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
              <a href={`/api/logout`}><button>logout</button></a>
              </div>
              
            ): (<p>Please log in!!!</p>)
          }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, {checkUserSession})(Home);
