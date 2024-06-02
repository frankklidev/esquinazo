import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ReactCardFlip from 'react-card-flip';

// Importar las imágenes de productos
import product1 from '../assets/pan.webp';
import product2 from '../assets/pizza.webp';
import product3 from '../assets/crema.webp';
import product4 from '../assets/baguet.webp';
import product5 from '../assets/pan2.webp';
import product6 from '../assets/espaguetti.webp';

const productImages = [
  { src: product1, alt: 'Producto 1' },
  { src: product2, alt: 'Producto 2' },
  { src: product3, alt: 'Producto 3' },
  { src: product4, alt: 'Producto 4' },
  { src: product5, alt: 'Producto 5' },
  { src: product6, alt: 'Producto 6' },
];

const productDetails = [
  { description: 'Nuestro sándwich especial está elaborado con ingredientes frescos y seleccionados cuidadosamente para ofrecerte un sabor único. Perfecto para un almuerzo rápido o una cena ligera.' },
  { description: 'Disfruta de nuestra deliciosa pizza, con una base crujiente y una variedad de ingredientes que se combinan para crear una experiencia culinaria inolvidable.' },
  { description: 'Nuestra crema de queso es suave y cremosa, ideal para acompañar tus platos favoritos o para disfrutar sola como un aperitivo delicioso.' },
  { description: 'El sándwich baguette combina una baguette crujiente con un relleno sabroso que satisfará tu apetito en cualquier momento del día.' },
  { description: 'Nuestro pan con hamburguesa ofrece una jugosa hamburguesa dentro de un pan recién horneado, perfecto para una comida rápida y deliciosa.' },
  { description: 'Los espaguetis están cocidos a la perfección y mezclados con una salsa sabrosa, creando un plato clásico que encanta a todos.' },
];


const Gallery: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean[]>(new Array(productImages.length).fill(false));

  const handleFlip = (index: number) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Menú
      </Typography>
      <Grid container spacing={2}>
        {productImages.map((product, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
              <Box
                component="img"
                src={product.src}
                alt={product.alt}
                onClick={() => handleFlip(index)}
                sx={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                onClick={() => handleFlip(index)}
                sx={{
                  width: '100%',
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: '#f5f5f5',
                  textAlign: 'center',
                  padding: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant="body1">{productDetails[index].description}</Typography>
              </Box>
            </ReactCardFlip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
