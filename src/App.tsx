import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ProfileMenu from './component/ProfileMenu';
import UserProfileComponent from './component/UserProfileComponent';
import GoogleSignIn from './GoogleSignIn';
import User from './model/User';

interface Props {

}

interface State {
  user? : User;
}

const theme = createTheme();

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user : undefined
    }
  }

  loginSuccess(response: any) {
    const user: User = this.createUserFromLoginResponse(response);
    this.setState({user: user});
  }
  
  loginFailure(response: any) {
    console.log("failure");
    console.log(response);
  }

  onLogout() {
    this.setState({user: undefined});
    alert("You have successfully logged out.");
  }

  createUserFromLoginResponse(response: any) : User {
    const profileObj = response.profileObj;
    const user: User = new User(profileObj.givenName, profileObj.familyName, profileObj.email, profileObj.imageUrl);

    return user;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {this.state.user !== undefined && <UserProfileComponent onLogout={() => this.onLogout()} user={this.state.user} />}
          {this.state.user === undefined && <GoogleSignIn loginSuccessCallback={(response: any) => this.loginSuccess(response)} loginFailureCallback={(response: any) => this.loginFailure(response)} />}
        </div>
      </ThemeProvider>
    );
  }
}