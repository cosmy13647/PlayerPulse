import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Addplayerform.module.css';  
export const Addplayerform = ({ onAdd }) => {
  const [userName, setUserName] = useState('');
  const [position, setPosition] = useState('');
  const [userAvg, setUserAvg] = useState('');
  const [userImg, setUserImg] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserImg(reader.result); // uploaded image in base64 format
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      userName,
      position,
      userAvg: parseFloat(userAvg),
      userImg: userImg || getImageUrl('boy.png') // use your utils here
    };

    onAdd(newPlayer);

    setUserName('');
    setPosition('');
    setUserAvg('');
    setUserImg(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />

      <select value={position} onChange={(e) => setPosition(e.target.value)} required>
        <option value="">Select Position</option>
        <option value="Striker">Striker</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Defender">Defender</option>
        <option value="Goalkeeper">Goalkeeper</option>
        <option value="LW">leftwinger</option>
        <option value="RW">rightwinger</option>
      </select>

      <input
        type="number"
        placeholder="Average Rating (1–10)"
        value={userAvg}
        onChange={(e) => setUserAvg(e.target.value)}
        min="1"
        max="10"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <button type="submit">Add Player</button>
    </form>
  );
};
