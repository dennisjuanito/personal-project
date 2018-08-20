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
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet
import { Button } from "semantic-ui-react";
import RenderTextArea from "../../../similar-components/RenderTextArea.js";
import RenderTimePicker from "../../../similar-components/RenderTimePicker";
import RenderDatePicker from "../../../similar-components/RenderDatePicker";
import RenderPlaceField from "../../../similar-components/RenderPlaceField.js";

const validateEventForm = combineValidators({
  postTitle: isRequired("Event Name")
});

class EventForm extends Component {
  constructor() {
    super();
    this.state = {
      // time: "",
      // date: new Date(),
      eventAddress: "",
      latLng: {}
    };
  }

  handleSelect = eventAddress => {
    console.log(eventAddress);
    console.log(this.props);
    geocodeByAddress(eventAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        // I will post a new location to the database when the user click the create event button
        this.setState({ latLng }); // check this again
        console.log("Success", latLng);
        this.props.change("eventAddress", eventAddress);
        this.props.change("latLng", latLng);
      })
      .catch(error => console.error("Error", error));
    this.setState({ eventAddress: eventAddress });
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
            name="eventName"
            component={RenderTextField}
            label="Event Name"
            placeholder="Event Name"
          />
          <Field
            name="eventDescription"
            component={RenderTextArea}
            label="Event Description"
            placeholder="Event Description"
          />
          <Field
            name="eventStartTime"
            type="text"
            component={RenderTimePicker}
            // onChange={this.handleTimeSelect}
          />
          <Field name="eventDate" component={RenderDatePicker} />

          <Field
            name="eventAddress"
            component={RenderPlaceField}
            onSelect={this.handleSelect}
          />

          <Button type="button" onClick={reset}>
            Reset
          </Button>
        </TheEventForm>
        {console.log(this.state)}
        {console.log(this.props)}
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

// handleChange = eventAddress => {
//   console.log(eventAddress);
//   this.setState({ eventAddress: eventAddress });
// };

// handleTimeSelect = time => {
//   this.setState({ time: time });
// };

// handleDateSelect = date => {
//   console.log(date);
//   this.setState({ date: date })
// }

{
  /* <TimeInput
  mode="24h"
  value={this.state.time}
  onChange={time => this.handleTimeSelect(time)}
/> */
}

{
  /* <InfiniteCalendar
  width={300}
  height={250}
  onSelect={date => this.handleDateSelect(date)}
  selected={this.state.date}
  minDate={lastWeek}
/> */
}

//<PlacesAutocomplete
//   value={this.state.eventAddress}
//   onChange={this.handleChange}
//   onSelect={this.handleSelect}
// >
//   {({
//     getInputProps,
//     suggestions,
//     getSuggestionItemProps,
//     loading
//   }) => (
//     <div>
//       <input
//         {...getInputProps({
//           placeholder: "Search Places ...",
//           className: "location-search-input"
//         })}
//       />
//       {/* <Label  as='a'  pointing> */}
//     //   <div className="autocomplete-dropdown-container">
//     //     {loading && <div>Loading...</div>}
//     //     {suggestions.map(suggestion => {
//       const className = suggestion.active
//         ? "suggestion-item--active"
//         : "suggestion-item";
//       // inline style for demonstration purpose
//       const style = suggestion.active
//         ? { backgroundColor: "#fafafa", cursor: "pointer" }
//         : { backgroundColor: "#ffffff", cursor: "pointer" };
//       return (
//         <div
//           {...getSuggestionItemProps(suggestion, {
//             className,
//             style
//           })}
//         >
//           <Segment>{suggestion.description}</Segment>
//           {/* {console.log(suggestion.description)}
//       {console.log(this.state.eventAddress)} */}
//         </div>
//       );
//     })}
//   </div>
// </div>
//   )}
// </PlacesAutocomplete>
