import React from "react";
import { useUserContext } from "../context/user-context";
import { Link } from "react-router-dom";
import "../styles/account.css";

const Account = () => {
  const { user } = useUserContext();

  return (
    <div className="account-nav">
      <Link className="account-link" to="/account">
        {user.name}
      </Link>
    </div>
  );
};

export default Account;
