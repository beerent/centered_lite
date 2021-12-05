import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleSignIn } from 'src/component/auth/GoogleSignIn';
import { UserProfile } from 'src/component/user/UserProfile';
import User from 'src/model/User';
import { useState } from 'react';

export const CenteredLite = () => {
    const theme = createTheme();
    const [user, setUser] = useState<User>();

    const createUserFromLoginResponse = (response: any): User => {
        const profileObj = response.profileObj;
        const user: User = new User(profileObj.givenName, profileObj.familyName, profileObj.email, profileObj.imageUrl);

        return user;
    }

    const onLoginSuccess = (response: any) => {
        const user: User = createUserFromLoginResponse(response);
        setUser(user);
    }

    const onLoginFailure = (response: any) => {
        alert("failure to login.")
    }

    const onLogout = () => {
        setUser(undefined);
        alert("You have successfully logged out.");
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {user !== undefined && <UserProfile onLogout={() => onLogout()} user={user} />}
                {user === undefined && <GoogleSignIn onLoginSuccess={(response: any) => onLoginSuccess(response)} onLoginFailure={(response: any) => onLoginFailure(response)} />}
            </div>
        </ThemeProvider>
    )
}