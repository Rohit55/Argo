import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import InventoryList from './components/InventoryList';
import AddInventory from './components/AddInventoryList';
import EditInventory from './components/EditInventoryList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/add" element={<AddInventory />} />
        <Route path="/edit/:id" element={<EditInventory />} />
      </Routes>
    </Router>
  );
};

export default App;
