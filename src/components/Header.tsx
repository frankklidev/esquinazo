import React from 'react';
import { AppBar, Toolbar, Box, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const MenuButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  flexWrap: 'nowrap', // Asegura que los botones no se envuelvan a la siguiente línea
});

const MenuButton = styled(Button)({
  color: '#fff',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '0.875rem', // Tamaño de fuente ajustado para asegurar que los botones quepan en una línea
  textTransform: 'uppercase',
  borderRadius: '20px',
  padding: '8px 16px', // Padding ajustado para asegurar que los botones quepan en una línea
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  margin: '0 4px', // Espaciado entre botones ajustado
});

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #8B4513 0%, #FF8C00 100%)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <MenuButtonContainer>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <MenuButton>
                Inicio
              </MenuButton>
            </Link>
            <Link to='/menu' style={{ textDecoration: 'none' }}>
              <MenuButton>
                Menú
              </MenuButton>
            </Link>
            <Link to='/order' style={{ textDecoration: 'none' }}>
              <MenuButton>
                Hacer Pedido
              </MenuButton>
            </Link>
          </MenuButtonContainer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
