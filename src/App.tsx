import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import PostJobForm from './components/PostJobForm';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/post-job" element={<PostJobForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;