import { useNavigate } from "react-router-dom";
import { GoogleSignIn } from "src/components/auth/GoogleSignIn";
import { useAppDispatch } from "src/redux/Hooks";
import { createUserObject, setUser } from "src/redux/user/UserSlice";

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

        navigate("/home");
    }

    const onLoginFailure = (response: any) => {
        alert("failed to login.");
    }

    return (
        <GoogleSignIn onLoginSuccess={(response: any) => onLoginSuccess(response)} onLoginFailure={(response: any) => onLoginFailure(response)} />
    )
};