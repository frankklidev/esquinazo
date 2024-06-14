/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import menuData from '../assets/menu.json';
import { useCart } from '../hooks/useCart';

const MenuPage: React.FC = () => {
  const data: any = menuData;
  const [expanded, setExpanded] = useState<string | false>(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const { dispatch } = useCart();

  const handleChange = (category: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? category : false);
  };

  const handleAddProduct = (product: any) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: isMobile ? '56px' : '64px', mb: '64px' }}>
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Menú
          </Typography>
          {data.categories.map((category: any) => (
            <Accordion key={category.name} expanded={expanded === category.name} onChange={handleChange(category.name)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  {category.products.map((product: any, index: any) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography variant="body1" color="textSecondary">{`$${product.price} CUP`}</Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleAddProduct(product)}
                        >
                          Agregar
                        </Button>
                      </Box>
                      {product.addOns && (
                        <List>
                          {product.addOns.map((addOn: any, idx: any) => (
                            <ListItem key={idx}>
                              <ListItemText primary={addOn.name} secondary={`$${addOn.price} CUP`} />
                              <Button
                                variant="outlined"
                                onClick={() =>
                                  dispatch({
                                    type: 'ADD_ITEM',
                                    payload: { ...addOn, id: `${product.name}-${addOn.name}`, quantity: 1 }
                                  })
                                }
                              >
                                Agregar
                              </Button>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default MenuPage;
