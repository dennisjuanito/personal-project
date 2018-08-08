import React, { Component } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import EventForm from "../Form/EventForm";
import { connect } from "react-redux";
import {
  updatePostTitle,
  updatePublishRelativeTimeFromNow,
  updatePostContents,
  updatePublishDate
} from "../../../ducks/reducers/makePostReducer.js";
import * as moment from "moment";
import axios from "axios";
import ImageUploader from "../ImageUploader/ImageUploader";

class PostModal extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });
  handleSubmit = async () => {
    // let { postTitle, postContents } = this.props.form.EventForm.values;
    this.props.updatePostTitle(this.props.form.EventForm.values.postTitle);
    this.props.updatePostContents(this.props.form.EventForm.values.postContents);
    this.setState({ open: false });
    let dateRightNow = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.props.updatePublishDate(dateRightNow);
    let {
      postContents,
      postPhoto,
      postTitle,
      type
    } = this.props.makePostReducer;
    let {id} = this.props.checkSessionReducer.user;
    await axios.post(`/api/posts`, {
      postContents,
      postPhoto,
      postTitle,
      type,
      publishDate: dateRightNow,
      id
    });
  };

  // for  updatePublishRelativeTimeFromNow
  // moment(
  //   moment().format("MMMM Do YYYY, h:mm:ss a"),
  //   "MMMM Do YYYY, h:mm:ss a"
  // ).fromNow()
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.open}>Make Post</Button>

        <Modal dimmer="blurring" open={open} onClose={this.close}>
          <Modal.Header>Upload a Post Photo</Modal.Header>
          <Modal.Content image>
            {/* <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            /> */}
            <ImageUploader />
            {/* <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description> */}
            <EventForm />
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              cancel
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="post"
              onClick={this.handleSubmit}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => state,
  {
    updatePostTitle,
    updatePublishRelativeTimeFromNow,
    updatePublishDate,
    updatePostContents
  }
)(PostModal);
