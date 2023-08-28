// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';

// Initialize component
const App = () => {
  return (
    <div>
      <h1>Taylor Swift Website</h1>
      <button id="button">Click me!</button>
      <SongList songs={[
        { name: 'Shake It Off', artist: 'Taylor Swift' },
        { name: 'Blank Space', artist: 'Taylor Swift' },
        { name: 'Bad Blood', artist: 'Taylor Swift' },
      ]} />
    </div>
  );
};

// Render component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));