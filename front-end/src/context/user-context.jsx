import React, { useContext } from "react";
import { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    treeCount: 0,
    title: "",
  });

  const setUserInfo = (id, user) => {
    setUser({ id, ...user });
  };

  return (
    <UserContext.Provider
      value={{ setIsSignedIn, setUserInfo, isSignedIn, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
