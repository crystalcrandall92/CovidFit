import React from "react";
import "../css/SignupField.css";


function SignupField() {
    return (
        <div className="signup">
            <form className="singupForm">
                <input className="name" type="name" placeholder="Name" />
                <br />
                <input className="email" type="email" placeholder="Email Address" />
                <br />
                <button className="button-signup" type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SignupField;