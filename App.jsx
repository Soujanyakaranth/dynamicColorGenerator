import React, { useState } from 'react';
import './App.css';
function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [color, setColor] = useState('#ffffff');
  const [message, setMessage] = useState('');
  const generateRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const generateColor = () => {
    const newColor = generateRandomColor();
    setBgColor(newColor)
    setColor(newColor);
  };
  const copyColorCode = () => {
    navigator.clipboard.writeText(color).then(() => {
      setMessage('Copied!');
      setTimeout(() => setMessage(''), 2000); // Hide message after 2 seconds
    });
  };
  return (
    <div className="App">
      <div
        className="color-box"
        style={{ backgroundColor: bgColor }}
      ></div>
      <p className="color-code">{color}</p>
      <div className="buttons">
        <button style={{ backgroundColor: bgColor }} onClick={generateColor}>Generate Color</button>
        <button style={{ backgroundColor: bgColor }} onClick={copyColorCode}>Copy Color Code</button>
      </div>
      {message && <p className="copy-message">{message}</p>}
    </div>
  );
}
export default App;