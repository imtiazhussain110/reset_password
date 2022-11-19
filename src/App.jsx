import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Success from "./Success";
import Failure from "./Failure";

function App() {
  const initialValues = {
    email: "",
    passwd: "",
    confirmPasswd: "",
  };
  const [input, setInput] = useState(initialValues);
  const [apiEmail, setApiEmail] = useState([]);
  const [check, setCheck] = useState(null);
  const [onLoad, setOnLoad] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const emailArray = data.map((i) => {
          return i.email;
        });

        setApiEmail(emailArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInput = (e) => {
    const newValue = e.target.value;
    const id = e.target.id;

    if (id === "email") {
      setInput({
        email: newValue,
        passwd: input.passwd,
        confirmPasswd: input.confirmPasswd,
      });
    } else if (id === "passwd") {
      setInput({
        email: input.email,
        passwd: newValue,
        confirmPasswd: input.confirmPasswd,
      });
    } else {
      setInput({
        email: input.email,
        passwd: input.passwd,
        confirmPasswd: newValue,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(apiEmail);
    setOnLoad(false);
    apiEmail.includes(input.email) ? setCheck(true) : setCheck(false);

    setInput(initialValues);
  };
  return (
    <>
      {onLoad ? (
        <div className="App">
          <form className="container">
            <h1 className="heading">Create New Password</h1>
            <div className="formBody">
              <div className="input">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  onChange={handleInput}
                  value={input.email}
                />
              </div>
              <div className="input">
                <label htmlFor="passwd">New Password</label> <br />
                <input
                  className="passwd"
                  type="password"
                  placeholder="Enter New Password"
                  id="passwd"
                  value={input.passwd}
                  onChange={handleInput}
                />
              </div>
              <div className="input">
                <label htmlFor="newPasswd">Confirm New Password</label> <br />
                <input
                  className="passwd"
                  type="password"
                  placeholder="Confirm New Password"
                  id="newPasswd"
                  value={input.confirmPasswd}
                  onChange={handleInput}
                />
              </div>

              <button className="btn" type="submit" onClick={handleSubmit}>
                Reset Password
              </button>
            </div>
            <div className="formFooter">
              <p className="footerPara">
                Not a member?
                <span className="signupLink">Signup for an account now.</span>
              </p>
            </div>
          </form>
        </div>
      ) : check ? (
        <Success />
      ) : (
        <Failure />
      )}
    </>
  );
}

export default App;
