import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import EventForm from "../Form/EventForm";
import { connect } from "react-redux";
import * as moment from "moment";
import axios from "axios";
import ImageUploader from "../ImageUploader/ImageUploader";

class EventModal extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });
  handleSubmit = () => {
    this.setState({ open: false });
    console.log(this.props);
    let { postTitle, postContents } = this.props.form.EventForm.values;
    let dateRightNow = moment().format("MMMM Do YYYY, h:mm:ss a");
    let { publishPhoto } = this.props.imageUploaderReducer;
    let { id } = this.props.checkSessionReducer.user;
    console.log(this.props);
    axios.post(`/api/posts`, {
      postContents,
      publishPhoto,
      postTitle,
      type: "Event",
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
        <Button onClick={this.open}>Create Event</Button>

        <Modal  open={open} onClose={this.close}>
          <Modal.Header>Upload a Event Photo</Modal.Header>
          <Modal.Content image>
            <ImageUploader />
           
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
  null
)(EventModal);

 {/* <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description> */}

                  {/* <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            /> */}