import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Importar las imágenes
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';

const slideImages = [
  {
    url: image1,
    caption: 'Ver Menú'
  },
  {
    url: image2,
    caption: 'Ver Menú'
  },
  {
    url: image3,
    caption: 'Ver Menú'
  },
];

const CustomSlider: React.FC = () => {
  return (
    <Box className="slide-container" sx={{ width: '100%', maxWidth: 900, margin: '0 auto', mt: 2, borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <Box key={index}>
            <Box
              sx={{
                backgroundImage: `url(${slideImage.url})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                height: '650px',
                position: 'relative',
                color: '#fff'
              }}
            >
              <Link to="/menu" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{
                  backgroundColor: 'rgba(255, 165, 0, 0.8)',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  color: '#fff',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 140, 0, 0.9)',
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }
                }}>
                  {slideImage.caption}
                </Typography>
              </Link>
            </Box>
          </Box>
        ))}
      </Slide>
    </Box>
  );
};

export default CustomSlider;
