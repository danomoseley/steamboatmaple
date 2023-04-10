import React from 'react';
import steamboat_ad from './steamboat_ad.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coming-soon">
        <h1>Steamboat Maple syrup products will be available for purchase soon!</h1>
        <p>
          In the meantime, below is an 1883 ad for the steamboat route that included a stop at the location where our syrup is made.
        </p>
      </div>
      <img src={steamboat_ad} className="steamboat-ad" alt="1884 Steamboat Ad" />
    </div>
  );
}

export default App;
