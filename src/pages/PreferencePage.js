import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PreferencePage.css";

const genres = ["グルメ", "歴史、文化", "自然", "ショッピング", "スポーツ", "居酒屋", "温泉"];

const PreferencePage = () => {
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (genre) => {
    setPreferences((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    navigate("/result", { state: { selectedPreferences: preferences } });
  };

  return (
    <div className="preferences">
      <h2>観光ジャンルの選択</h2>
      <div>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              checked={preferences.includes(genre)}
              onChange={() => handleCheckboxChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default PreferencePage;
