import React from 'react';
import { AppBar, Toolbar, Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { orange } from '@mui/material/colors';

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  background: orange[400],
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const MenuButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

const MenuButton = styled(Button)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#333' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Title>
              Esquinazo
            </Title>
          </Box>
          <MenuButtonContainer>
            <Link to='/'>
              <MenuButton>
                Inicio
              </MenuButton>
            </Link>
            <Link to='/menu'>
              <MenuButton>
                Menú
              </MenuButton>
            </Link>
            <Link to='/order'>
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
