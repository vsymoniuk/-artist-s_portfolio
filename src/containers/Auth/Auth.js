import React from "react";
import "./Auth.scss";
import { connect } from "react-redux";
import { login } from "../../store/actions/auth";

const Auth = (props) => {
  const loginHandler = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    props.login(email, password);
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

      <button
        onClick={loginHandler}
        className="btn black waves-effect waves-light col s12"
      >
        Login
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(Auth);
