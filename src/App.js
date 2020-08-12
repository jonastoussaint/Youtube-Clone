import React from 'react';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';

function App() {
  return (
    //Bem Class naming convention
    <div className="App">
      {/*This is for navigation*/}
      <Router>
        {/*Header Componets*/}
        <Header/>
        <Switch>
        {/*/:searchTerm will match any URL */}
        <Route path="/search/:searchTerm">  
          <div className="app__page">
            {/*Sidebar Componets*/}
            <Sidebar />
            {/*Recommended Video Componets*/}
            <SearchPage />
          </div>
        </Route>
        <Route path="/">
          <div className="app__page">
            {/*Sidebar Componets*/}
            <Sidebar />
            {/*Recommended Video Componets*/}
            <RecommendedVideos />

          </div>
        </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
