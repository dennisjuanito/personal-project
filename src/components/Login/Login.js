import React, { Component } from "react";

export default class Login extends Component {
  login() {
    var { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    var encodeUri = `${encodeURIComponent(window.location.origin)}/auth/callback`;
    var baseUrl = `https://${REACT_APP_DOMAIN}`;
    var redirectUrl =
      baseUrl +
      `/authorize?client_id=${REACT_APP_CLIENT_ID}` +
      `&scope=openid%20profile%20email` +
      `&redirect_uri=${encodeUri}` +
      `&response_type=code`;
    window.location = redirectUrl;
  }
  render() {
    return (
        <div>
            <button onClick={() => this.login()}>Get Started</button>
        </div>
    );
  }
}
