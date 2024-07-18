import React, { useState } from 'react';
import '../Bar/index.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="buttons">
        <button onClick={increaseProgress}>Increase</button>
        <button onClick={decreaseProgress}>Decrease</button>
      </div>
    </div>
  );
};

export default ProgressBar;
