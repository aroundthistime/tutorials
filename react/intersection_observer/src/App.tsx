import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import DogsPage from './components/pages/dogs/DogsPage';
import ItemsPage from './components/pages/Items/ItemsPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<ItemsPage />} />
          <Route path="/dogs" element={<DogsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
