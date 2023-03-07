import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Navigationbar  from './Navigationbar';
import Home from './components/Home';
import Report from './components/Report';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Router>
            <Navigationbar />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/report' element={<Report />}/>
              <Route path='/logout' element={<Logout />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
