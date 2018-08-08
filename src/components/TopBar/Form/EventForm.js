import {
  createValidator,
  composeValidators,
  combineValidators,
  isRequired,
  isAlphabetic,
  isNumeric
} from "revalidate";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import RenderTextField from "../../../similar-components/RenderTextField.js";
import styled from "styled-components";
import { connect } from "react-redux";
import TimeInput from "material-ui-time-picker";
import InfiniteCalendar from "react-infinite-calendar";
import PlacesAutocomplete from 'react-places-autocomplete';
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet
import { Button, Modal } from "semantic-ui-react";
import renderTextArea from "../../../similar-components/RenderTextArea.js";

const validateEventForm = combineValidators({
  postTitle: isRequired("Event Title")
});

class EventForm extends Component {
  // handleOnChange = values => {
  //   console.log(values);
  // };
  state = {
    time: "",
    date: new Date()
  };

  handleChange = time => {
    this.setState({ time });
    console.log(this.state.time);
  };

  handleSelect = date => {
    this.setState({ date });
  };
  render() {
    var today = new Date();
    var lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    let { reset } = this.props;

    return (
      <div>
        <TheEventForm>
          <Field
            name="eventTitle"
            component={RenderTextField}
            label="Event Title"
            placeholder="Event Title"
          />
          {/* <button type="submit">submit</button> */}
          <Field
            name="eventContents"
            component={renderTextArea}
            label="Event Contents"
            placeholder="Event Contents"
          />
          <TimeInput
            mode="24h"
            value={this.state.time}
            onChange={time => this.handleChange(time)}
          />
          <InfiniteCalendar
            width={300}
            height={250}
            selected={new Date()}
            onSelect={date => this.handleSelect(date)}
            selected={today}
            minDate={lastWeek}
          />
          <Button type="button" onClick={reset}>
            Reset
          </Button>
        </TheEventForm>
        {console.log(this.state.date)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectEventForm = connect(
  mapStateToProps,
  null
)(EventForm);

export default reduxForm({
  form: "EventForm",
  enableReinitialize: true,
  validateEventForm
})(connectEventForm);

const TheEventForm = styled.form`
  display: flex;
  flex-direction: column;
`;
