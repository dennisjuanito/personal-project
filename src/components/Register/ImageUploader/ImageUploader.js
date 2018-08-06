import React, { Component } from 'react';
import {storage} from "../../../firebase/index.js";
import firebase from 'firebase/app';
import {connect} from "react-redux";
import {updateAvatar} from "../../../ducks/reducers/registerReducer.js";

class ImageUploader extends Component {
    constructor() {
        super();
        this.state = {
            avatar: null,
            url: "",
            progress:0
        }
    }

    handleChange = (e) => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({
                avatar: image
            })
        }
    }

    handleUpload = () => {
        const {avatar} = this.state;
        const uploadTask = storage.ref(`avatar_images/${avatar}`).put(avatar);
        console.log(uploadTask);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot) => {
            // progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        }, 
        (error) => {
            // error function
            console.log(error)
        }, 
        () => {
            // complete function
            storage.ref(`avatar_images/${avatar}`).getDownloadURL().then(url => {
            console.log(this.props);
                this.props.updateAvatar(url)
                this.setState({url})
                // AXIOS CALL TO SAVE IMAGE URL IN DB GOES HERE
            }).then(() => this.setState({avatar: null}))
        });
    }

    render() {
            return (
                <div>
                    <input type='file' onChange={this.handleChange} innerRef={fileInput => this.fileInput = fileInput}/>
                        {!this.state.avatar
                        ?
                        <button onClick={() => this.fileInput.click()}>Select Image</button>
                        :
                        <button onClick={this.handleUpload}>Choose This Image</button>}
                        
                </div> 
            )
        }
        
        

    }


export default connect(null, {updateAvatar})(ImageUploader);


 