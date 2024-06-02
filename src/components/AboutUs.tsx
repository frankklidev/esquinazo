import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import backgroundImage from '../assets/fondo.webp'; // Asegúrate de ajustar la ruta si es necesario

const AboutUs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px 0',
        borderRadius: '15px',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            borderRadius: '15px',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff5722' }}>
            Sobre Nosotros
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.1rem', color: '#333' }}>
            En Esquinazo, nos enorgullecemos de preparar comida deliciosa y saludable con los mejores ingredientes. Nuestro equipo de expertos se dedica a crear platos que no solo satisfacen tu apetito, sino que también deleitan tus sentidos. Cada plato es preparado con amor y atención al detalle, asegurando que cada bocado sea una experiencia inolvidable.
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.1rem', color: '#333' }}>
            Desde pizzas artesanales hasta pastas frescas, cada elemento de nuestro menú está diseñado para ofrecerte lo mejor de la cocina. Nos esforzamos por utilizar ingredientes frescos y locales siempre que sea posible, para garantizar que cada plato tenga el sabor y la calidad que nuestros clientes esperan.
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.1rem', color: '#333' }}>
            Ven y descubre por qué Esquinazo es el lugar preferido para disfrutar de una comida exquisita. ¡Esperamos verte pronto!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
