/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import HomePage from './components/HomePage';
import OrderStepper from './components/OrderStepper';

const App: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const addProduct = (product: any) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProduct = (productName: string) => {
    setSelectedProducts(selectedProducts.filter(product => product.name !== productName));
  };

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: '64px',
        }}
      >
        <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/order" element={<OrderStepper addProduct={addProduct} removeProduct={removeProduct} selectedProducts={selectedProducts} />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
