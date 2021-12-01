import React from 'react';
import './App.css';
import GoogleSignIn from './GoogleSignIn';

function loginSuccess(response: any) {
  console.log("success");
  console.log(response);
}

function loginFailure(response: any) {
  console.log("failure");
  console.log(response);
}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GoogleSignIn loginSuccessCallback={(response: any) => loginSuccess(response)} loginFailureCallback={(response: any) => loginFailure(response)} />
      </div>
    );
  }
}