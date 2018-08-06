import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ComplexButton from "./Button/ComplexButton.js";
import BasicInformationForm from './Form/BasicInformationForm.js';
import AdditionalInformationForm from './Form/AdditionalInformationForm.js';
import ImageUploader from './ImageUploader/ImageUploader.js';


function getSteps() {
  return ['Select your roles', 'Create a basic account information', 'Additional Information', 'Choose your avatar'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
    return (<ComplexButton />);
    case 1:
    return (<BasicInformationForm />);
    case 2:
    return (<AdditionalInformationForm />);
    case 3: return (<ImageUploader />);
    default:
    return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };
  
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };
  
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };
  
  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  render() {
    // const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    
    return (
      <div >
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        
                        >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} >
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

  
  export default VerticalLinearStepper;
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