import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

class PostModal extends Component {
  state = { open: false };

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button onClick={this.open}>Make Post</Button>

        <Modal dimmer="blurring" open={open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
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
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default PostModal;
