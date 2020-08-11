import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    //Bem Class naming convention
    <div className="App">
      {/*<h1>Lets Build a Youtube Clone</h1>*/}
      {/*Header Componets*/}
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
        {/*Sidebar Componets*/}

      {/*Recommended Video Componets*/}
      </div>
      
    </div>
  );
}

export default App;
