/* eslint-disable @typescript-eslint/no-explicit-any */
export const sendOrder = async (customerDetails: any, selectedProducts: any) => {
    try {
      const response = await fetch('http://localhost:3000/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerDetails, selectedProducts }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Pedido enviado:', data);
      } else {
        console.error('Error al enviar el pedido:', data.error);
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
    }
  };
  