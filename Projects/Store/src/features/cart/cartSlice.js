import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// initial State
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// getting local storage variables if not, initail state.
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

// Reducer object
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID); // return true or false
      if (item) {
        item.amount += product.amount; // NOTE: we are appending intially it would be 0 += 1
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount; // NOTE: we are appending
      state.cartTotal += product.price * product.amount; // NOTE: we are appending
      cartSlice.caseReducers.calculateTotals(state);  // ?
      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState));  // first setting up the default state
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload; // Reason for getting only id and not if else is we are removing exisiting item in the cart array.
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID); // using filter for removing.
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error('Item removed from cart');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Cart updated');
    },
    calculateTotals: (state) => {  // This is repeatable method, we need it other methods so created as seperate method.
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// slice action variable:
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
