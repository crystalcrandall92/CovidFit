import React from "react";
import "../css/SigninField.css";

function SigninField() {
    return (
        <div className="login">
            <form className="loginForm">
                <input className="email" type="email" placeholder="Email Address" />
                <br />
                <input className="password" type="password" placeholder="Password" />
                <br />
                <button className="button-pwd" type="submit">Login</button>
            </form>
        </div>
    )

}

export default SigninField;