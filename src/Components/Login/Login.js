import React from 'react'
// import { Link } from 'react-router-dom';
import './Login.css'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase';
    
function Login(props) {
  


    var uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: '/dashboard',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,

            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    return (
        <div className="container">
            <div className="left-side">
                <img src="loginpage_logo.jpeg" alt="Login" />
            </div>

            <div className="right-side">
                <div className="login-head">LOG IN</div>
               {/* <div className="form">
                    <form>
                        <div className="input">

                            <input placeholder="Username" />
                        </div>
                        <div className="input">
                            <input placeholder="Password" />

                        </div>
                        <div className="login-button">
                            <button type="submit">LOG IN</button>
                        </div>
                    </form>
    </div>  */ }
                <div>
                    <i class="fas fa-phone-alt"></i>
                </div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                {/* <div className="signup">
                    Don't Have an account, <Link to='/Signup'>Sign Up</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Login