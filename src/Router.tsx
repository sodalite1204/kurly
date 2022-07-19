import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import GNB from 'components/GNB/GNB';
import Item from 'pages/ProductList/Item/Item';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        {/* <Route path="/item" element={<Item />} /> */}
        <Route path="/products/category/:category" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
