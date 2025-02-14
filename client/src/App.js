import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import CreateURL from './components/URL/CreateURL';
import URLList from './components/URL/URLList';
import URLAnalytics from './components/Analytics/URLAnalytics';
import OverallAnalytics from './components/Analytics/OverallAnalytics';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateURL />} />
        <Route path="/urls" element={<URLList />} />
        <Route path="/analytics/:alias" element={<URLAnalytics />} />
        <Route path="/analytics/overall" element={<OverallAnalytics />} />
      </Routes>
    </div>
  );
}

export default App;
