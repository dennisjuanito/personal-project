import React, { Component } from "react";
import { storage } from "../../../firebase/index.js";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import { updatePostPhoto } from "../../../ducks/reducers/makePostReducer";

class ImageUploader extends Component {
  constructor() {
    super();
    this.state = {
      postPhoto: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({
        postPhoto: image
      });
    }
  };

  handleUpload = () => {
    const { postPhoto } = this.state;
    const uploadTask = storage
      .ref(`postPhoto_images/${postPhoto}`)
      .put(postPhoto);
    console.log(uploadTask);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref(`postPhoto_images/${postPhoto}`)
          .getDownloadURL()
          .then(url => {
            console.log(this.props);
            this.props.updatePostPhoto(url);
            this.setState({ url });
            // AXIOS CALL TO SAVE IMAGE URL IN DB GOES HERE
          })
          .then(() => this.setState({ postPhoto: null }));
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.url ? (
          <Image wrapped size="medium" src={this.state.url} />
        ) : (
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
        )}
        <input
          type="file"
          onChange={this.handleChange}
          innerRef={fileInput => (this.fileInput = fileInput)}
        />
        {!this.state.postPhoto ? (
          <button onClick={() => this.fileInput.click()}>Select Image</button>
        ) : (
          <button onClick={this.handleUpload}>Choose This Image</button>
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  { updatePostPhoto }
)(ImageUploader);
