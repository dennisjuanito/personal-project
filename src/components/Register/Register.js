import React, { Component } from "react";
import dotenv from "dotenv";
import { Icon, Step, Button } from "semantic-ui-react";

dotenv.config();

export default class Register extends Component {
  render() {
    // let {SERVER_PORT} = process.env;
    // console.log(SERVER_PORT);
 
    return (
      <div>
        <a href={`/api/logout`}>
          <Button primary>Register</Button>
        </a>
        <Button onClickprimary>Next</Button>
        <Step.Group horizontall>
          <Step active>
            <Icon name="truck" />
            <Step.Content>
              <Step.Title>Role</Step.Title>
              <Step.Description>Choose your role</Step.Description>
            </Step.Content>
          </Step>

          <Step complete>
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step complete>
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
    );
  }
}
