import React, { Component } from 'react'
import dotenv from "dotenv";
dotenv.config();


export default class Register extends Component {
  render() {
    // let {SERVER_PORT} = process.env;
    // console.log(SERVER_PORT);
    return (
      <div>
        Register
        <a href={`/api/logout`}><button>logout</button></a>
     
      </div>
    )
  }
}
