/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AppBar, Toolbar, Box, Container, Button, Badge, IconButton, Drawer, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../hooks/useCart';
import Cart from './Cart'; // Asegúrate de importar el componente Cart

const MenuButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  flexWrap: 'nowrap',
});

const MenuButton = styled(Button)({
  color: '#fff',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  borderRadius: '20px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  margin: '0 4px',
});

const Header: React.FC = () => {
  const { state } = useCart();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const cartItems = state.items;

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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <MenuButton>
                Inicio
              </MenuButton>
            </Link>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <MenuButton>
                Menú
              </MenuButton>
            </Link>
          </MenuButtonContainer>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
            Pedidos
          </Typography>
          <Cart /> {/* Utiliza el componente Cart aquí */}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
