/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardHeader, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import menuData from '../assets/menu.json';
import { MenuData, MenuItem, MenuItemDetails } from '../interfaces/types';

// Importar las imágenes de las categorías
import picaderaImg from '../assets/picadera.jpg';
import bebidasImg from '../assets/cerveza.jpeg';
import pastasImg from '../assets/espaguetti.webp';
import cremasImg from '../assets/crema.webp';
import platosImg from '../assets/carne.webp';
import sandwichsImg from '../assets/baguet.webp';
import hamburguesasImg from '../assets/hambur.webp';

const categoryImages: { [key: string]: string } = {
  "PICADERA": picaderaImg,
  "BEBIDAS Y CAFÉ": bebidasImg,
  "PASTAS": pastasImg,
  "CREMAS": cremasImg,
  "PLATOS": platosImg,
  "SANDWICHS": sandwichsImg,
  "HAMBURGUESAS": hamburguesasImg
};

interface ProductSelectionProps {
  onAddProduct: (product: any) => void;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ onAddProduct }) => {
  const data: MenuData = menuData;
  const [addedProducts, setAddedProducts] = React.useState<{ [key: string]: boolean }>({});

  const isMenuItemDetails = (item: any): item is MenuItemDetails => {
    return item && typeof item.price === 'number' && typeof item.image === 'string';
  };

  const handleAddProduct = (product: any, itemName: string) => {
    const isAdded = !!addedProducts[itemName];
    setAddedProducts({ ...addedProducts, [itemName]: !isAdded });
    onAddProduct(product);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Selección de Productos
      </Typography>
      {Object.keys(data).map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src={categoryImages[category]}
              alt={category}
              sx={{ width: 40, height: 40, borderRadius: '50%', mr: 2 }}
            />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'primary.main' }}>
              {category}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {Object.entries(data[category] as MenuItem).map(([item, details]) => {
              if (isMenuItemDetails(details)) {
                const { price, image } = details;
                return (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card sx={{
                      height: '100%',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                      },
                    }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={item}
                      />
                      <CardHeader title="" />
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mt: 2 }}>
                          {item}
                        </Typography>
                        <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold', mt: 2 }}>
                          <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                            {`$${price}`}
                          </Box>
                          {' '}
                          <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
                            CUP
                          </Box>
                        </Typography>
                        <Button
                          variant={addedProducts[item] ? "contained" : "outlined"}
                          color="primary"
                          fullWidth
                          sx={{ mt: 2 }}
                          onClick={() => handleAddProduct({ name: item, price }, item)}
                        >
                          {addedProducts[item] ? "Agregado" : "Añadir"}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card sx={{
                      height: '100%',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                      },
                    }}>
                      <CardHeader title={item} />
                      <CardContent>
                        <List>
                          {Object.entries(details as MenuItem).map(([subItem, subDetails]) => {
                            const { price, image } = subDetails as MenuItemDetails;
                            return (
                              <ListItem key={subItem} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box component="img" src={image} alt={subItem} sx={{ width: 60, height: 60, borderRadius: '50%', mb: 1 }} />
                                <ListItemText primary={subItem} secondary={`$${price} CUP`} />
                                <Button
                                  variant={addedProducts[subItem] ? "contained" : "outlined"}
                                  color="primary"
                                  onClick={() => handleAddProduct({ name: subItem, price }, subItem)}
                                >
                                  {addedProducts[subItem] ? "Agregado" : "Añadir"}
                                </Button>
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
        </Box>
      ))}
    </Box>
  );
};

export default ProductSelection;
