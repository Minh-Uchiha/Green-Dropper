import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../context/user-context";
import { useNavigate } from "react-router-dom";
import "../styles/signup-page.css";

const SignUpForm = ({ setHasSubmitted }) => {
  const { setIsSignedIn, setUserInfo } = useUserContext();

  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: "",
    reenteredPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser((oldUser) => {
      return { ...oldUser, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      const url = "https://localhost:44362/api/User/SignUp";
      await axios
        .post(url, {
          name: user.name,
          password: user.password,
          email: user.email,
        })
        .then(async (response) => {
          if (response.data.succeeded) {
            setIsSignedIn(true);

            const getInfoUrl = "https://localhost:44362/api/User/GetUserInfo";
            await axios
              .post(getInfoUrl, {
                userId: response.data.id,
              })
              .then((res) => {
                setUserInfo(response.data.id, res.data);
              });

            setHasSubmitted(true);
          } else {
            setError(response.data.message);
          }
        });
    } else {
      const url = "https://localhost:44362/api/User/Login";
      await axios
        .post(url, {
          email: user.email,
          password: user.password,
        })
        .then(async (response) => {
          if (response.data.succeeded) {
            setIsSignedIn(true);

            const getInfoUrl = "https://localhost:44362/api/User/GetUserInfo";
            await axios
              .post(getInfoUrl, {
                userId: response.data.id,
              })
              .then((res) => {
                setUserInfo(response.data.id, res.data);
              });

            setHasSubmitted(true);
          } else {
            setError(response.data.message);
          }
        });
    }
  };

  return (
    <section className="sign-up-form">
      <p className="error">{error}</p>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <label htmlFor="name">User Name:</label> <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name here"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email:</label> <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email here"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password:</label> <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password here"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <label htmlFor="re-entered-password">Re-enter your password:</label>
        <br />
        <input
          type="password"
          name="reenteredPassword"
          placeholder="Re-enter your password"
          value={user.reenteredPassword}
          onChange={handleChange}
        />
      </div>
      <div className="submit-field">
        <input
          type="button"
          value={`${isSignUp ? "Sign up" : "Sign in"}`}
          onClick={handleSubmit}
        />
      </div>
      <p>
        {isSignUp ? `Already have an account?` : "Don't have an account?"}{" "}
        <span onClick={() => setIsSignUp((oldIsSignUp) => !oldIsSignUp)}>
          {isSignUp ? "Sign in" : "Sign up"}
        </span>
      </p>
    </section>
  );
};

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 2000);
  });

  return (
    <section>
      <h1>Redirecting to home page...</h1>
    </section>
  );
};

const SignUp = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  return (
    <section className="sign-up-form-containter">
      {!hasSubmitted ? (
        <SignUpForm setHasSubmitted={setHasSubmitted} />
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default SignUp;
