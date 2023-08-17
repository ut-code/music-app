import React from 'react';
import './App.css';

/* Components */
import SongList from './components/songList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="tempo">
          tempo
        </div>
        <div className="energy">
          energy
        </div>
        <div className="mode">
          mode
        </div>
        <div className="speech">
          speech
        </div>
        <div className="valence">
          valence
        </div>
        <div className="howToUse">
          how to use
        </div>
        <div className="push">
          push
        </div>
        <div className="playlist">
          <h1>playlist</h1>
          <SongList
          order = {'01'}
          name = {'アイドル'}
          artist = {'YOASOBI'}
          time = {0}
          />
          <SongList
          order = {'02'}
          name = {'青のすみか'}
          artist = {'キタニタツヤ'}
          time = {0}
          />
          <SongList
          order = {'03'}
          name = {'怪獣の花唄'}
          artist = {'Vaundy'}
          time = {0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
