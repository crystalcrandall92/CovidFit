import React, { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Axios from "axios";
import "../components/css/styles.css"


function Signup() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/auth/register",
    }).then((res) => console.log(res));
  };

  return (
    <div className="signinbg">
      <Nav />
      <Header />
      <div style={{ width: "70%", margin: "0 auto", backgroundColor: "white", textAlign: "center" }}>
        <h1>Register</h1>
        <div>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        </div>
        <div>
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        </div>
        <button onClick={register}>Submit</button>
      </div>
    </div>
  );
}

export default Signup;