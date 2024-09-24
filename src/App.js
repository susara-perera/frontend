// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'; // Update path if necessary
import AddPayment from './components/AddPayment'; // Update path if necessary
import AllPayment from './components/AllPayment'; // Update path if necessary
import UpdatePayment from './components/UpdatePayment'; // Update path if necessary

function App() {
  const location = useLocation();

  // Check if the current path is the AddPayment route
  const showHeader = location.pathname === '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<AddPayment />} />
        <Route path="/allPayment" element={<AllPayment />} />
        <Route path="/allPayment/:id" element={<UpdatePayment />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
