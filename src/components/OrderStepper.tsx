/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Container, Typography, Alert } from '@mui/material';
import ProductSelection from './ProductSelection';
import CustomerDetails from './CustomerDetails';
import OrderConfirmation from './OrderConfirmation';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon />,
    2: <PersonIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Selección de Productos', 'Detalles de Cliente', 'Confirmación del Pedido'];

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
  '&:disabled': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.text.disabled,
  },
}));

const OrderStepper: React.FC<{ addProduct: (product: any) => void; removeProduct: (productName: string) => void; selectedProducts: any[] }> = ({ addProduct, removeProduct, selectedProducts }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({ name: '', whatsapp: '', delivery: false, address: '', deliveryAddress: '', receiverName: '', receiverWhatsapp: '', samePerson: false });
  const [alert, setAlert] = useState('');

  const handleNext = () => {
    if (activeStep === 0 && selectedProducts.length === 0) {
      setAlert('Debes seleccionar al menos un producto.');
      return;
    }
    if (activeStep === 1 && (!customerDetails.name || !customerDetails.whatsapp)) {
      setAlert('Los campos Nombre y WhatsApp son obligatorios.');
      return;
    }
    setAlert('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setAlert('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCustomerDetails({ name: '', whatsapp: '', delivery: false, address: '', deliveryAddress: '', receiverName: '', receiverWhatsapp: '', samePerson: false });
  };

  const handleAddProduct = (product: any) => {
    addProduct(product);
  };

  const handleCustomerDetailsChange = (details: any) => {
    setCustomerDetails(details);
  };

  const handleOrderConfirm = () => {
    console.log('Pedido confirmado:', {
      customerDetails,
      selectedProducts,
      totalPrice: selectedProducts.reduce((total, product) => total + product.price, 0),
    });
    setActiveStep(steps.length);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <ProductSelection onAddProduct={handleAddProduct} />;
      case 1:
        return <CustomerDetails onDetailsChange={handleCustomerDetailsChange} />;
      case 2:
        return <OrderConfirmation selectedProducts={selectedProducts} customerDetails={customerDetails} removeProduct={removeProduct} onConfirmOrder={handleOrderConfirm} />;
      case steps.length:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Todos los pasos completados - ¡Pedido Completo!
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 2 }}>
              Reiniciar
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box sx={{ width: '100%', mt: 4 }}>
        {activeStep < steps.length && (
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
        <Box sx={{ mt: 2 }}>
          {alert && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              {alert}
            </Alert>
          )}
          <Box sx={{ mt: 2 }}>
            {renderStepContent(activeStep)}
          </Box>
          {activeStep < steps.length && (
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mb: 2 }}>
              <CustomButton
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Atrás
              </CustomButton>
              <Box sx={{ flex: '1 1 auto' }} />
              <CustomButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </CustomButton>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default OrderStepper;
