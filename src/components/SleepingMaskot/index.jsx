import { useState, useEffect } from 'react';
import './style.css'; 
import sleepingMaskot from './img/sleepingMaskot.png'; 

export const SleepingMaskot = () => {
  const [zPositions, setZPositions] = useState([120, 140, 130]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZPositions(oldPositions => 
        oldPositions.map(pos => {
          const newPos = pos - 1; 
          return newPos > -10 ? newPos : 150; 
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-maskot">
      <img src={sleepingMaskot} alt="Sleeping Maskot" className="dragon-image" />
      {zPositions.map((pos, index) => (
        <div 
          key={index}
          className="animated-letter" 
          style={{ bottom: `${pos}%`, right: `${10 + index * 5}%` }}>
          Z
        </div>
      ))}
    </div>
  );
};
