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
import { updatePublishRelativeTimeFromNow, updatePublishDate } from "../../../ducks/reducers/makePostReducer.js";
import RenderTextField from "../../../similar-components/RenderTextField.js";
import styled from "styled-components";
import { connect } from "react-redux";
import renderTextArea from "../../../similar-components/RenderTextArea.js";

const validatePostForm = combineValidators({
  postTitle: isRequired("Post Title")
});

class EventForm extends Component {
    // handleOnChange = values => {
    //   console.log(values);
    // };

  render() {
    let { reset, handleSubmit } = this.props;
 console.log(handleSubmit);
    return (
      <div>
        <PostForm> 
        {console.log(
            "Ai "
        )}
          <Field
            name="postTitle"
            component={RenderTextField}
            label="Post Title"
            placeholder="Post Title"
          />
          {/* <button type="submit">submit</button> */}
          <Field
            name="postContents"
            component={renderTextArea}
            label="Post Contents"
            placeholder="Post Contents"
          />
          <button type="button" onClick={reset}>
            Reset
          </button>
        </PostForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectEventForm = connect(
  mapStateToProps,
  { updatePublishRelativeTimeFromNow, updatePublishDate}
)(EventForm);

export default reduxForm({
  form: "EventForm",
  enableReinitialize: true,
  validatePostForm
})(connectEventForm);



const PostForm = styled.form`
    display: flex;
    flex-direction: column;
`;