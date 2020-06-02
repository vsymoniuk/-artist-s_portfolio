import React from "react";
import axios from "axios";
import "./Auth.scss";
import { Toast } from "../../shared/toast";

const Auth = () => {
  const loginHandler = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };  
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVWQ86fzH4PO-hnm58SeTCDb4-_xAeoyQ",
        authData
      );
      console.log(response);
      Toast("Login succes");
    } catch (e) {
      Toast("Invalid input data");
    }
  };

  return (
    <div className="Auth row card-panel">
      <div className="input-field col s12">
        <i className="material-icons prefix">mail_outline</i>
        <input id="email" type="email" />
        <label htmlFor="email" data-error="wrong" data-success="right">
          Email
        </label>
      </div>

      <div className="input-field col s12">
        <i className="material-icons prefix">lock_outline</i>
        <input id="password" type="password" />
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-field col s12">
        <button onClick={loginHandler}  className="btn black waves-effect waves-light col s12">
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
