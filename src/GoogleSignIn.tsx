import React from "react";
import GoogleLogin from "react-google-login";

const CLIENT_ID = "408045834999-rohbos8asm7qrsc6ts680katehfi5phi.apps.googleusercontent.com";

interface GoogleSignInProps {
    loginSuccessCallback: Function;
    loginFailureCallback: Function;
}

export default class GoogleSignIn extends React.Component <GoogleSignInProps> {
    constructor (props: GoogleSignInProps)
    {
        super(props);
    }

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
        /> </div>
        );
      }
}