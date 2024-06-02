import React from 'react';
import { Box,Container } from '@mui/material';

import CustomSlider from './Slider';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Map from './Map';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 10 }}>
        <CustomSlider />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      </Box>
      <Box id="about-us" mt={5}>
        <AboutUs />
      </Box>
      <Box id="gallery" mt={5}>
        <Gallery />
      </Box>
      <Box id="map" mt={5}>
        <Map />
      </Box>
    </Container>
  );
};

export default HomePage;
