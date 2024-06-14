/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import HomePage from './components/HomePage';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
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
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </CartProvider>
  );
};

export default App;
