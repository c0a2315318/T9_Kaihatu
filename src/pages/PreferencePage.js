import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const genres = ["グルメ", "歴史、文化", "自然", "ショッピング", "スポーツ", "居酒屋", "温泉"];

function PreferencePage() {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((genre) => genre !== value)
    );
  };

  const handleSubmit = () => {
    navigate('/result', { state: { selectedPreferences } });
  };

  return (
    <div>
      <h1>観光選択</h1>
      {genres.map((genre) => (
        <div key={genre}>
          <label>
            <input
              type="checkbox"
              value={genre}
              onChange={handleCheckboxChange}
            />
            {genre}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>結果を見る</button>
    </div>
  );
}

export default PreferencePage;