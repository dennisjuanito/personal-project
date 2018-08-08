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
import renderTextArea from "../../../similar-components/RenderTextArea.js";

const validatePostForm = combineValidators({
  postTitle: isRequired("Post Title")
});

class PostForm extends Component {
    // handleOnChange = values => {
    //   console.log(values);
    // };

  render() {
    let { reset, handleSubmit } = this.props;
 console.log(handleSubmit);
    return (
      <div>
        < ThePostForm> 
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
        </ ThePostForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectPostForm = connect(
  mapStateToProps,
 null
)(PostForm);

export default reduxForm({
  form: "PostForm",
  enableReinitialize: true,
  validatePostForm
})(connectPostForm);



const ThePostForm = styled.form`
    display: flex;
    flex-direction: column;
`;