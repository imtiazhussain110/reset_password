import React from "react";
import success_img from "./images/success.jpg";

function Success() {
  return (
    <div className="container">
      <h1 className="heading">Password Set Successfully!</h1>
      <h2 className="subheading">
        Your password has been set successfully. <br />
        You can now sign in with your new password.
      </h2>
      <img className="successImg" src={success_img} alt="success_image" />
      <button className="btn">SIGN IN</button>
      <div className="formFooter">
        <p className="footerPara">
          Not a member?
          <span className="signupLink">Signup for an account now.</span>
        </p>
      </div>
    </div>
  );
}

export default Success;
