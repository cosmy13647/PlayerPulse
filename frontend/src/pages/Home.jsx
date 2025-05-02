import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Nav/Navbar';
import { Card } from '../components/Card/Card';
import { Addplayerform } from '../components/Addplayerform/Addplayerform';
import styles from './Home.module.css';

// ✅ API URL from .env file
const apiUrl = import.meta.env.VITE_API_URL;

export const Home = () => {
  const [players, setPlayers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${apiUrl}/players`);
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    try {
      const response = await fetch(`${apiUrl}/players`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer),
      });

      if (response.ok) {
        const savedPlayer = await response.json();
        setPlayers((prev) => [...prev, savedPlayer]);
      }
    } catch (error) {
      console.error('Error saving player:', error);
    }
  };
 

  return (
    <div>
      <Navbar />

      {!showForm && players.length === 0 && (
        <div>
          <p>No players added yet. Click below to get started!</p>
          <button onClick={() => setShowForm(true)}>Add Player</button>
        </div>
      )}

      {showForm && <Addplayerform onAdd={handleAddPlayer} />}

      {players.length > 0 &&
        players.map((player, index) => (
          <div className={styles.container} key={index}>
            <Card
              userImg={player.userImg}
              userName={player.userName}
              userAvg={player.userAvg}
            />
          </div>
        ))}

      {players.length > 0 && !showForm && (
        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          Add Player
        </button>
      )}
      {players.length > 0 && showForm && (
        <button onClick={() => setShowForm(false)}>Cancel</button>
      )}
    </div>
  );
};

export default Home;
