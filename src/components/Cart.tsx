/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../hooks/useCart';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleIncreaseQuantity = (item: any) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const handleDecreaseQuantity = (item: any) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  const handleRemoveItem = (item: any) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <Box sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Pedido
      </Typography>
      <List>
        {state.items.map((item: any) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <ListItemText
              primary={item.name}
              secondary={`$${item.price} CUP`}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="increase" onClick={() => handleIncreaseQuantity(item)}>
                <AddIcon sx={{ color: 'green' }} />
              </IconButton>
              <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
              <IconButton aria-label="decrease" onClick={() => handleDecreaseQuantity(item)}>
                <RemoveIcon sx={{ color: 'orange' }} />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleRemoveItem(item)}>
                <DeleteIcon sx={{ color: 'red' }} />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
      <Card sx={{ mt: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
            Total
          </Typography>
          <Typography variant="h4" sx={{ textAlign: 'center', mt: 1, color: 'primary.main' }}>
            ${state.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0)} CUP
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cart;
