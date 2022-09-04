import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <p>
        <Link className="sign-up-link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
