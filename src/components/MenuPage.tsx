/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Drawer,
  List as MUIList,
  ListItemIcon,
  ListItemButton,
  Divider,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import menuData from '../assets/menu.json'; // Asegúrate de ajustar la ruta si es necesario
import { MenuData, MenuItem, MenuItemDetails } from '../interfaces/types'; // Importa los tipos definidos
import MenuIcon from '@mui/icons-material/Menu';

// Importar las imágenes de las categorías
import picaderaImg from '../assets/picadera.jpg';
import bebidasImg from '../assets/cerveza.jpeg';
import pastasImg from '../assets/espaguetti.webp';
import cremasImg from '../assets/crema.webp';
import platosImg from '../assets/carne.webp';
import sandwichsImg from '../assets/baguet.webp';
import hamburguesasImg from '../assets/hambur.webp';

const categories = [
  { name: "PICADERA", image: picaderaImg },
  { name: "BEBIDAS Y CAFÉ", image: bebidasImg },
  { name: "PASTAS", image: pastasImg },
  { name: "CREMAS", image: cremasImg },
  { name: "PLATOS", image: platosImg },
  { name: "SANDWICHS", image: sandwichsImg },
  { name: "HAMBURGUESAS", image: hamburguesasImg }
];

const drawerWidth = 240;

const MenuPage: React.FC = () => {
  const data: MenuData = menuData; 
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  const isMenuItemDetails = (item: any): item is MenuItemDetails => {
    return item && typeof item.price === 'number' && typeof item.image === 'string';
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        Categorías
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 2, color: 'gray' }}>
        Aquí están las opciones
      </Typography>
      <Divider />
      <MUIList>
        {categories.map((category) => (
          <ListItemButton
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            sx={{
              borderLeft: selectedCategory === category.name ? '4px solid red' : '4px solid transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon>
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{ width: 50, height: 50, borderRadius: '50%' }}
              />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItemButton>
        ))}
      </MUIList>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', top: '64px', bottom: 0 },
          }}
        >
          {drawer}
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: isMobile ? '56px' : '64px', mb: '64px' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            {selectedCategory}
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(data[selectedCategory] as MenuItem).map(([item, details]) => {
              if (isMenuItemDetails(details)) {
                const { price, image } = details;
                return (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card sx={cardStyle}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={item}
                      />
                      <CardHeader title="" />
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                          {item}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="secondary"
                          sx={{ fontWeight: 'bold', mt: 2 }}
                        >
                          {`$${price} CUP`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card sx={cardStyle}>
                      <CardHeader title={item} />
                      <CardContent>
                        <List>
                          {Object.entries(details as MenuItem).map(([subItem, subDetails]) => {
                            const { price } = subDetails as MenuItemDetails;
                            return (
                              <ListItem key={subItem}>
                                <ListItemText primary={subItem} secondary={`$${price} CUP`} />
                              </ListItem>
                            );
                          })}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MenuPage;
