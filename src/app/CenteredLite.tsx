import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GoogleSignIn } from 'src/component/auth/GoogleSignIn';
import { UserProfile } from 'src/component/user/UserProfile';
import { useAppDispatch, useAppSelector } from 'src/redux/Hooks';
import { createUserObject, userIsSet, setUser, clearUser } from 'src/redux/user/UserSlice';

export const CenteredLite = () => {
    const theme = createTheme();

    const dispatch = useAppDispatch();

    const createUserFromLoginResponse = (response: any) => {
        const profileObj = response.profileObj;
        const user = createUserObject(profileObj.givenName, profileObj.familyName, profileObj.email, profileObj.imageUrl);

        return user;
    }

    const onLoginSuccess = (response: any) => {
        const user = createUserFromLoginResponse(response);
        dispatch(setUser(user));
    }

    const onLoginFailure = (response: any) => {
        alert("failure to login.")
    }

    const onLogout = () => {
        dispatch(clearUser());
        alert("You have successfully logged out.");
    }

    const userIsLoggedIn : boolean = useAppSelector(userIsSet);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {userIsLoggedIn && <UserProfile onLogout={() => onLogout()} />}
                {!userIsLoggedIn && <GoogleSignIn onLoginSuccess={(response: any) => onLoginSuccess(response)} onLoginFailure={(response: any) => onLoginFailure(response)} />}
            </div>
        </ThemeProvider>
    )
}