/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface OrderConfirmationProps {
  selectedProducts: any[];
  removeProduct: (productName: string) => void;
  customerDetails: {
    name: string;
    whatsapp: string;
    delivery: boolean;
    deliveryAddress: string;
    receiverName: string;
    receiverWhatsapp: string;
    samePerson: boolean;
  };
  onConfirmOrder: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ selectedProducts, removeProduct, customerDetails, onConfirmOrder }) => {
  const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);

  const handleConfirmOrder = async () => {
    const orderData = {
      customerDetails,
      selectedProducts,
      totalPrice,
    };

    console.log('Pedido a enviar:', orderData);
    onConfirmOrder();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Confirmación del Pedido
      </Typography>
      <List>
        {selectedProducts.map((product, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeProduct(product.name)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Total: ${totalPrice}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleConfirmOrder}>
        Confirmar Pedido
      </Button>
    </Box>
  );
};

export default OrderConfirmation;
