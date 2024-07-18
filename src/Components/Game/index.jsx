import React, { useState } from 'react';

const GamePicker = ({ games }) => {
  const [selectedGame, setSelectedGame] = useState('');

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  };

  return (
    <div className="game-picker">
      <button onClick={pickRandomGame}>Pick Game</button>
      {selectedGame && <p>Selected Game: {selectedGame}</p>}
    </div>
  );
};

export default GamePicker;
