import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate("/preferences");
  };

  return (
    <div className="dialog">
      <h2>あなたはこのサービスに</h2>
      <h2>同意しますか？</h2>
      <div className="buttons">
        <button onClick={() => alert("ばかやろう")}>同意しない</button>
        <button onClick={handleAgree}>同意する</button>
      </div>
    </div>
  );
};

export default HomePage;
