import React, { useState } from 'react';
import './changeDay.css';

const ChangeDay = () => {
  const [isDay, setDay] = useState(true);

  return (
    <div className={`div ${isDay ? 'day' : 'night'}`}>
      <h1>{isDay ? 'Es ist Tag! 🌞' : 'Es ist Nacht! 🌑'}</h1>
      <button onClick={() => setDay(!isDay)}>Wechsel zu {isDay ? 'Nacht' : 'Tag'}</button>
    </div>
  );
}

export default ChangeDay;