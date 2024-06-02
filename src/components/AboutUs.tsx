import React from 'react';
import {Typography, Container } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        En Esquinazo, nos enorgullecemos de preparar comida deliciosa y saludable con los mejores ingredientes. Nuestro equipo de chefs expertos se dedica a crear platos que no solo satisfacen tu apetito, sino que también deleitan tus sentidos. Cada plato es preparado con amor y atención al detalle, asegurando que cada bocado sea una experiencia inolvidable.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Desde pizzas artesanales hasta pastas frescas, cada elemento de nuestro menú está diseñado para ofrecerte lo mejor de la cocina. Nos esforzamos por utilizar ingredientes frescos y locales siempre que sea posible, para garantizar que cada plato tenga el sabor y la calidad que nuestros clientes esperan.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Ven y descubre por qué Esquinazo es el lugar preferido para disfrutar de una comida exquisita. ¡Esperamos verte pronto!
      </Typography>
    </Container>
  );
};

export default AboutUs;
