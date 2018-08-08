import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import PostForm from "../Form/PostForm";
import { connect } from "react-redux";
// import {
//   updatePostTitle,
//   updatePublishRelativeTimeFromNow,
//   updatePostContents,
//   updatePublishDate
// } from "../../../ducks/reducers/makePostReducer.js";
import * as moment from "moment";
import axios from "axios";
import ImageUploader from "../ImageUploader/ImageUploader";

class PostModal extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });
  handleSubmit = () => {
    this.setState({ open: false });
    console.log(this.props);
    let { postTitle, postContents } = this.props.form.PostForm.values;
    let dateRightNow = moment().format("MMMM Do YYYY, h:mm:ss a");
    let { publishPhoto } = this.props.imageUploaderReducer;
    let { id } = this.props.checkSessionReducer.user;
    console.log(this.props);
    axios.post(`/api/posts`, {
      postContents,
      publishPhoto,
      postTitle,
      type: "Post",
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
            <PostForm />
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
  null
)(PostModal);
