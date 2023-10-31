// @ts-nocheck
import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../screens/Dashboard/index.jsx';
import Home from '../screens/Home/index.js';
import Page404 from '../screens/Page404/index.jsx';


/**
 * Renders the navigation routes for the application.
 *
 * @param {Object} props - The props object containing the necessary data for rendering the routes.
 * @return {JSX.Element} The rendered navigation routes.
 */
function Navigation(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:userId" element={<Dashboard />} />
      <Route path="/dashboard/:userId/:api" element={<Dashboard />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default Navigation;
