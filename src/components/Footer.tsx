import React from 'react';
import { AppBar, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #8B4513 0%, #FF8C00 100%)',
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" component="p" gutterBottom>
          © 2024 Esquinazo. Todos los derechos reservados.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
