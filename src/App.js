import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;