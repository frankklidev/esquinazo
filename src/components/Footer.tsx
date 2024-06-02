import React from 'react';
import { Box, Container, Typography} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[800],
        color: (theme) => theme.palette.common.white,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" component="p" gutterBottom>
          © 2024 Esquinazo. Todos los derechos reservados.
        </Typography>
        
      </Container>
    </Box>
  );
};

export default Footer;
