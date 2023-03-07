import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loginValues = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "user",
      password: "user",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = loginValues.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('last-login', new Date().toLocaleString());
        setTimeout(() => {
            navigate("/");
        }, 1500);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );



  return (
    <div className="login-main-div">
      <div className="login-form">
        <div className="title">Sign-In</div>
        {isSubmitted ? <div>Signing you in...</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
