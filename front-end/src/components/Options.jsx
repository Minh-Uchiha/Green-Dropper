import React from "react";
import { useUserContext } from "../context/user-context";
import SignUp from "./SignUp";
import Burger from "./Burger";
import Account from "./Account";
import "../styles/options.css";

const Options = () => {
  const { isSignedIn } = useUserContext();

  return (
    <section className="options">
      {isSignedIn ? <Account /> : <SignUp />}
      <Burger />
    </section>
  );
};

export default Options;
