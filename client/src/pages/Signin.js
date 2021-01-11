import React, { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Axios from "axios";
import "../components/css/styles.css"

function Signin() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/auth/login",
    }).then((res) => console.log(res));
  };
  return (
    <div className="signinbg">
      <Nav />
      <Header />
      <div style={{ width: "70%", margin: "0 auto", backgroundColor: "white", textAlign: "center" }}>
        <h1>Login</h1>
        <div>
          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button onClick={login} >Submit</button>
      </div>
    </div>
  )
}




export default Signin;