import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import ComplexButton from "./Button/ComplexButton.js";
import BasicInformationForm from "./Form/BasicInformationForm.js";
import AdditionalInformationForm from "./Form/AdditionalInformationForm.js";
import ImageUploader from "./ImageUploader/ImageUploader.js";
import axios from "axios";
import {withRouter} from "react-router";
import { connect } from "react-redux";
import compose from "recompose/compose";

function getSteps() {
  return [
    "Select your roles",
    "Create a basic account information",
    "Additional Information",
    "Choose your avatar"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ComplexButton />;
    case 1:
      return <BasicInformationForm />;
    case 2:
      return <AdditionalInformationForm />;
    case 3:
      return <ImageUploader />;
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleFinish = () => {
    console.log(this.props);
    let {
      firstName,
      lastName,
      age,
      bootcampName,
      location,
      roles,
      aLittleAboutMyself,
      learningOrTrying,
      favoriteLanguages,
      skillsOrLanguages,
      projectsAndHacks,
      avatar
    } = this.props.registerReducer;
    axios.put(`/api/register`, {
      firstName,
      lastName,
      age,
      bootcampName,
      location,
      roles,
      aLittleAboutMyself,
      learningOrTrying,
      favoriteLanguages,
      skillsOrLanguages,
      projectsAndHacks,
      avatar
    });
    
    this.props.history.push("/home");

    // this.setState({
    //   activeStep: 0,
    // });
    //

    // console.log();
  };

  render() {
    // const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleFinish}
                        >
                          Finish
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => state;

export default compose( connect(
  mapStateToProps,
  null
),withRouter )(VerticalLinearStepper);







// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

{
  /* {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleFinish} >
              Finish
            </Button>
          </Paper>
        )} */
}

// const styles = theme => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginTop: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing.unit * 2,
//   },
//   resetContainer: {
//     padding: theme.spacing.unit * 3,
//   },
// });

// VerticalLinearStepper.propTypes = {
//   classes: PropTypes.object,
// };
