import React from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
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

function App() {
  // <GoogleSignIn loginSuccessCallback={loginSuccess} loginFailureCallback={loginFailure}
  // <GoogleSignIn loginSuccessCallback={(response: any) => loginSuccess(response)} loginFailureCallback={(response: any) => loginFailure(response)} />
  
  return (
    <div className="App">
      <GoogleSignIn loginSuccessCallback={(response: any) => loginSuccess(response)} loginFailureCallback={(response: any) => loginFailure(response)} />
    </div>
  );
}

export default App;
