import React from "react";

function Failure() {
  const reLoad = () => {
    location.reload();
  };
  return (
    <div className="container">
      <h1 className="heading">Email Not Found!</h1>
      <p onClick={reLoad} className="signupLink">
        Try Again?
      </p>
    </div>
  );
}

export default Failure;
