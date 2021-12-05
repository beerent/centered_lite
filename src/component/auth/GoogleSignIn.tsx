import GoogleLogin from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID || '';

interface Props {
    onLoginSuccess: Function;
    onLoginFailure: Function;
}

export const GoogleSignIn = ({ onLoginSuccess, onLoginFailure }: Props) => 
    <div>
        <GoogleLogin
            buttonText='Login With Google'
            onSuccess={(response: any) => {
                onLoginSuccess(response)
            }}
            onFailure={(response: any) => {
                onLoginFailure(response)
            }}

            clientId={CLIENT_ID}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
        />
    </div>
