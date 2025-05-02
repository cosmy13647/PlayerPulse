import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../components/Nav/Navbar';
import { Card } from '../components/Card/Card';
import { Addplayerform } from '../components/Addplayerform/Addplayerform';
import styles from './Home.module.css';

export const Home = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:5000/players');
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
  
    fetchPlayers();
  }, []);
  
  const [showForm, setShowForm] = useState(false);

 /* const handleAddPlayer = (newPlayer) => {
    setPlayers(prev => [...prev, newPlayer]);
    setShowForm(false);
  };*/
  const handleAddPlayer = async (newPlayer) => {
    try {
      const response = await fetch('http://localhost:5000/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer),
      });
  
      if (response.ok) {
        const savedPlayer = await response.json();
        setPlayers(prev => [...prev, savedPlayer]);
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

      {showForm && (
        <Addplayerform onAdd={handleAddPlayer} />
      )}

      {players.length > 0 && (
        players.map((player, index) => (
          <div className={styles.container} key={index}>
            <Card
              userImg={player.userImg}
              userName={player.userName}
              userAvg={player.userAvg}
            />



          </div>
        ))
      )}
      {players.length > 0 && !showForm && (
        <button className ={styles.addButton} onClick={() => setShowForm(true)}>Add  Player</button>
      )}
      {players.length > 0 && showForm && (
        <button onClick={() => setShowForm(false)}>Cancel</button>
      )}
    </div>
  );
};

export default Home;
