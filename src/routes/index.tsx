import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Profile } from '../containers/Profile';
import { Repositories } from '../containers/Repositories';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="https://google.com" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
