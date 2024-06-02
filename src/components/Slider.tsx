import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Importar las imágenes
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.jpg';

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
    <Box className="slide-container" sx={{ width: '100%', maxWidth: 900, margin: '0 auto', mt: 2 }}>
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
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  color: '#fff',
                  fontSize: '1.5rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
