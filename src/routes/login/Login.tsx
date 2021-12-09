import { useNavigate } from "react-router-dom";
import { GoogleSignIn } from "src/components/auth/GoogleSignIn";
import { Home } from "src/components/home/Home";
import { useAppDispatch, useAppSelector } from "src/redux/Hooks";
import { createUserObject, setUser, userIsSet } from "src/redux/user/UserSlice";

export const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const createUserFromLoginResponse = (response: any) => {
        const profileObj = response.profileObj;
        const user = createUserObject(profileObj.givenName, profileObj.familyName, profileObj.email, profileObj.imageUrl);

        return user;
    }

    const onLoginSuccess = (response: any) => {
        const user = createUserFromLoginResponse(response);
        dispatch(setUser(user));

        navigate("/");
    }

    const onLoginFailure = (response: any) => {
        alert("failed to login.");
    }

    const userIsLoggedIn : boolean = useAppSelector(userIsSet);
    if (userIsLoggedIn) {
        return <Home />
    }

    return (
        <GoogleSignIn onLoginSuccess={(response: any) => onLoginSuccess(response)} onLoginFailure={(response: any) => onLoginFailure(response)} />
    )
};