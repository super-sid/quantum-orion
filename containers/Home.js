// containers/Home.js

import React from 'react';
import SongList from './SongList';

const Home = () => {
  return (
    <div>
      <h1>Taylor Swift Website</h1>
      <SongList songs={[...]} />
    </div>
  );
};

export default Home;