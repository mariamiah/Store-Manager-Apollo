import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginContainer } from './containers/Login';

export const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
      </Routes>
  </BrowserRouter>
);
