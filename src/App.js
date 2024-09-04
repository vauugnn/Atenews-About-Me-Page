import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<AboutMe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;