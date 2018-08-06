import React, { Component } from "react";
import {
  updateALittleAboutMyself,
  updateLearningOrTrying,
  updateFavoriteLanguages,
  updateSkillsOrLanguages,
  updateProjectsAndHacks
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

class AdditionalInformationForm extends Component {
  state = {
    aLittleAboutMyself: "",
    learningOrTrying: "",
    favoriteLanguages: "",
    skillsOrLanguages: "",
    projectsAndHacks: "",
    roles: ""
  };

  componentDidMount() {
    let {
      aLittleAboutMyself,
      learningOrTrying,
      favoriteLanguages,
      skillsOrLanguages,
      projectsAndHacks,
      roles
    } = this.props.registerReducer;
    this.setState({
      aLittleAboutMyself,
      learningOrTrying,
      favoriteLanguages,
      skillsOrLanguages,
      projectsAndHacks,
      roles
    });
  }

  handleChange = name => event => {
    let {
      updateALittleAboutMyself,
      updateLearningOrTrying,
      updateFavoriteLanguages,
      updateSkillsOrLanguages,
      updateProjectsAndHacks
    } = this.props;
    console.log([name]);
    this.setState({
      [name]: event.target.value
    });

    switch (name) {
      case "aLittleAboutMyself":
        updateALittleAboutMyself(event.target.value);
        break;
      case "learningOrTrying":
        updateLearningOrTrying(event.target.value);
        break;
      case "favoriteLanguages":
        updateFavoriteLanguages(event.target.value);
        break;
      case "skillsOrLanguages":
        updateSkillsOrLanguages(event.target.value);
        break;
      case "projectsAndHacks":
        updateProjectsAndHacks(event.target.value);
        break;
    }
  };

  render() {
    // let { roles } = this.props.registerReducer.roles;
    return (
      <div>
        <TextField
          fullWidth
          label="A description about yourself"
          multiline
          rowsMax="3"
          value={this.state.aLittleAboutMyself}
          onChange={this.handleChange("aLittleAboutMyself")}
          margin="auto"
        />
        {this.state.roles === "Mentor" ? (
          <div>
            <TextField
              label="Skills Or Languages"
              value={this.state.skillsOrLanguages}
              onChange={this.handleChange("skillsOrLanguages")}
              margin="normal"
            />
            <TextField
              label="Projects And Hacks"
              value={this.state.projectsAndHacks}
              onChange={this.handleChange("projectsAndHacks")}
              margin="normal"
            />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <TextField
              label="Learning Or Trying"
              value={this.state.learningOrTrying}
              onChange={this.handleChange("learningOrTrying")}
              margin="normal"
            />
            <TextField
              label="Favorite Languages"
              value={this.state.favoriteLanguages}
              onChange={this.handleChange("favoriteLanguages")}
              margin="normal"
            />
          </div>
        )}
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
    updateALittleAboutMyself,
    updateLearningOrTrying,
    updateFavoriteLanguages,
    updateSkillsOrLanguages,
    updateProjectsAndHacks
  }
)(AdditionalInformationForm);
