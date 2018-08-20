import React, { Component } from "react";
import axios from "axios";
// import dotenv from "dotenv";
import { connect } from "react-redux";
import { updatePublishes } from "../../ducks/reducers/homeReducer.js";
import { checkUserSession } from "../../ducks/reducers/checkSessionReducer.js";
import { Segment } from "semantic-ui-react";
import _ from "lodash";
// dotenv.config();

class Home extends Component {
  componentDidMount() {
    axios.get(`/api/check-session`).then(response => {
      this.props.checkUserSession(response.data);
      // console.log(response);
    });
    axios.get(`/api/publishes`).then(response => {
      console.log(response.data);
      this.props.updatePublishes(response.data);
    });
  }
  render() {
    // let {SERVER_PORT} = process.env;
    console.log(this.props);

    let { user } = this.props.checkSessionReducer;

    let displayPublishes = _.map(this.props.homeReducer.publishes, publish => {
      return (
        <div key={publish.publishId}>
          <Segment.Group raised >
            <Segment color='red'>
              <img style={{width: "100%"}}src={publish.publishPhoto} alt="" />
            </Segment>

            <Segment >
              <p>{publish.type}</p>
              <p>{publish.userId}</p>
            </Segment>
          </Segment.Group>
        </div>
      );
    });

    // console.log(user);
    return (
      <div>
        {/* {user.authId ? (
          <div>
           
          </div>
        ) : (
          <p>Please log in!!!</p>
        )} */}
         {displayPublishes}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(
  mapStateToProps,
  { checkUserSession, updatePublishes }
)(Home);
