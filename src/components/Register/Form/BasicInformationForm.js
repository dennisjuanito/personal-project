import React, { Component } from "react";
import {
  updateFirstName,
  updateLastName,
  updateAge,
  updateBootcampName,
  updateLocation
} from "../../../ducks/reducers/registerReducer.js";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
// import {
//   createValidator,
//   composeValidators,
//   combineValidators,
//   isRequired,
//   isAlphabetic,
//   isNumeric
// } from "revalidate";

// const validateBasicInformation = combineValidators({
//   firstname: isRequired("First Name")
// });

class BasicInformationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    bootcampName: "",
    location: ""
  };

  componentDidMount() {
    let {
      firstName,
      lastName,
      age,
      bootcampName,
      location
    } = this.props.registerReducer;
    this.setState({
      firstName,
      lastName,
      age,
      bootcampName,
      location
    });
  }

  handleChange = name => event => {
    let {
      updateFirstName,
      updateLastName,
      updateAge,
      updateBootcampName,
      updateLocation
    } = this.props;
    console.log([name]);
    this.setState({
      [name]: event.target.value
    });
    switch (name) {
      case "firstName":
        updateFirstName(event.target.value);
        break;
      case "lastName":
        updateLastName(event.target.value);
        break;
      case "age":
        updateAge(event.target.value);
        break;
      case "bootcampName":
        updateBootcampName(event.target.value);
        break;
      case "location":
        updateLocation(event.target.value);
        break;
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="First Name"
          value={this.state.firstName}
          onChange={this.handleChange("firstName")}
          margin="normal"
        />
        <TextField
          label="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange("lastName")}
          margin="normal"
        />
        <TextField
          label="Age"
          value={this.state.age}
          onChange={this.handleChange("age")}
          margin="normal"
        />
        <TextField
          label="Bootcamp Name"
          value={this.state.bootcampName}
          onChange={this.handleChange("bootcampName")}
          margin="normal"
        />
        <TextField
          label="Location"
          value={this.state.location}
          onChange={this.handleChange("location")}
          margin="normal"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    updateFirstName,
    updateLastName,
    updateAge,
    updateBootcampName,
    updateLocation
  }
)(BasicInformationForm);
