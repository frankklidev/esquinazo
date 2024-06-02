import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Importar las imágenes de productos
import product1 from '../assets/pan.jpg';
import product2 from '../assets/pizza.jpg';
import product3 from '../assets/crema.jpg';
import product4 from '../assets/baguet.jpg';
import product5 from '../assets/pan2.jpg';
import product6 from '../assets/espaguetti.jpg';

const productImages = [
  { src: product1, alt: 'Producto 1' },
  { src: product2, alt: 'Producto 2' },
  { src: product3, alt: 'Producto 3' },
  { src: product4, alt: 'Producto 4' },
  { src: product5, alt: 'Producto 5' },
  { src: product6, alt: 'Producto 6' },
];

const Gallery: React.FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Menú
      </Typography>
      <Grid container spacing={2}>
        {productImages.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={product.src}
              alt={product.alt}
              sx={{
                width: '100%',
                height: 300, // Altura fija para todas las imágenes
                objectFit: 'cover', // Mantiene la proporción y recorta el exceso
                borderRadius: '8px',
                boxShadow: 3,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
