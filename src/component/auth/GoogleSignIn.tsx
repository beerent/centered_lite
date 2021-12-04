import React from "react";
import GoogleLogin from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID || '';

interface Props {
    loginSuccessCallback: Function;
    loginFailureCallback: Function;
}

export default class GoogleSignIn extends React.Component<Props> {
    render() {
        return (
            <div>
                <GoogleLogin
                    buttonText='Login With Google'
                    onSuccess={(response: any) => {
                        this.props.loginSuccessCallback(response)
                    }}
                    onFailure={(response: any) => {
                        this.props.loginFailureCallback(response)
                    }}

                    clientId={CLIENT_ID}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token'
                />
            </div>
        );
    }
}