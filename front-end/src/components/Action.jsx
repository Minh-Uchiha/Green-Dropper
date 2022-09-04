import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/action.css";

const Action = () => {
  const navigate = useNavigate();

  return (
    <div className="action-container">
      <button onClick={() => navigate("/send-request")}>
        SEND REQUEST TO PLANT TREES
      </button>
    </div>
  );
};

export default Action;
