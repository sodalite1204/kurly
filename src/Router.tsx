import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import GNB from 'components/GNB/GNB';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
