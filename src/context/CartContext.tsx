/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface AddOn {
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  addOns?: AddOn[];
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY';
  payload: CartItem;
}

export const CartContext = createContext<any>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Genera un nuevo ID para cada ítem añadido
      const newItem = { ...action.payload, id: uuidv4() };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    }
    case 'REMOVE_ITEM': {
      // Elimina el producto del carrito
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }
    case 'INCREASE_QUANTITY': {
      // Incrementa la cantidad de un producto específico
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case 'DECREASE_QUANTITY': {
      // Decrementa la cantidad de un producto específico
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


