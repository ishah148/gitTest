import About from 'pages/About';
import HomePage from 'pages/HomePage';
import Layout from 'pages/Layout';
import NotFound from 'pages/NotFound';
import SearchPage from 'pages/SearchPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
