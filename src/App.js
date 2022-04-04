import React from 'react';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header />
        <MovieLibrary movies={data} />
      </React.StrictMode>
    </div>
  );
}

export default App;
