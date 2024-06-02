/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Box, TextField, Typography, Switch, FormControlLabel, InputAdornment, Checkbox, FormGroup } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

interface CustomerDetailsProps {
  onDetailsChange: (details: any) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ onDetailsChange }) => {
  const [details, setDetails] = React.useState({
    name: '',
    whatsapp: '',
    delivery: false,
    deliveryAddress: '',
    receiverName: '',
    receiverWhatsapp: '',
    samePerson: false,
  });

  useEffect(() => {
    onDetailsChange(details);
  }, [details]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'samePerson') {
      setDetails(prevDetails => ({
        ...prevDetails,
        [name]: checked,
        receiverName: checked ? prevDetails.name : '',
        receiverWhatsapp: checked ? prevDetails.whatsapp : '',
      }));
    } else {
      setDetails(prevDetails => ({
        ...prevDetails,
        [name]: value,
        ...(name === 'name' && details.samePerson ? { receiverName: value } : {}),
        ...(name === 'whatsapp' && details.samePerson ? { receiverWhatsapp: value } : {}),
      }));
    }
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, delivery: checked }));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Detalles del Cliente
      </Typography>
      <TextField
        label="Nombre"
        name="name"
        value={details.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="WhatsApp"
        name="whatsapp"
        value={details.whatsapp}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                <WhatsAppIcon />
              </InputAdornment>
              <InputAdornment position="start">
                +53
              </InputAdornment>
            </>
          ),
        }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={details.delivery}
            onChange={handleSwitchChange}
            name="delivery"
            color="primary"
          />
        }
        label="¿Quiere domicilio?"
      />
      {details.delivery && (
        <>
          <TextField
            label="Dirección"
            name="deliveryAddress"
            value={details.deliveryAddress}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={details.samePerson}
                  onChange={handleChange}
                  name="samePerson"
                />
              }
              label="¿El receptor es la misma persona?"
            />
          </FormGroup>
          {!details.samePerson && (
            <>
              <TextField
                label="Nombre del Receptor"
                name="receiverName"
                value={details.receiverName}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonAddIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="WhatsApp del Receptor"
                name="receiverWhatsapp"
                value={details.receiverWhatsapp}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <>
                      <InputAdornment position="start">
                        <WhatsAppIcon />
                      </InputAdornment>
                      <InputAdornment position="start">
                        +53
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default CustomerDetails;
