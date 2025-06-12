import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e0e0e0',
      borderRadius: '10px',
      overflow: 'hidden',
      height: '24px',
      marginBottom: '12px'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: '#3b82f6',
        transition: 'width 0.1s linear'
      }}></div>
    </div>
  );
};

const App = () => {
  const [progressBars, setProgressBars] = useState([]);

  const handleAdd = () => {
    setProgressBars([...progressBars, Date.now()]);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
      <button
        onClick={handleAdd}
        style={{
          marginBottom: '24px',
          padding: '12px 24px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Add
      </button>
      <div>
        {progressBars.map((id) => (
          <ProgressBar key={id} />
        ))}
      </div>
    </div>
  );
};

export default App;