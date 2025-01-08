import { createStore as _createStore } from 'vuex';
import axios from 'axios';

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},
      cartItems: []
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      },
      ADD_TO_CART(state, { item, quantity }) {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
          // If the item already exists, update the quantity
          existingItem.quantity += quantity;
        } else {
          // If the item does not exist, add it to the cart
          state.cartItems.push({
            ...item,
            quantity: quantity
          });
        }
      },
      CLEAR_CART(state){
        state.cartItems =[];
      }
    },

  })
  return store;
}