<template>
    <div class="container">
      <h2>Shopping Cart</h2>
      <ul v-if="cartItems.length > 0">
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - Quantity: {{ item.quantity }} - Price: ${{ item.price.toFixed(2) }} 
          - Total: ${{ (item.price * item.quantity).toFixed(2) }}
        </li>
      </ul>
      <p v-else>Your cart is empty.</p>
      <div v-if="cartItems.length > 0" class="total">
        <h3>Total Price: ${{ totalPrice.toFixed(2) }}</h3>
        <button @click="checkout" class="checkout">Checkout</button>
        <button @click="deleteCart" class="delete">Delete Cart</button>

      </div>
    </div>
  </template>
  
  <script>
  import cartCheckout from '../services/CartService'; 
  
  export default {
    computed: {
      cartItems() {
        return this.$store.state.cartItems;
        
        
      },
      totalPrice() {
        return this.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity; 
        }, 0);
      }
    },
    methods: {
      checkout() {
        
        console.log(this.cartItems);
        cartCheckout.checkoutCart(this.cartItems).then((response) =>{
            this.$store.commit('CLEAR_CART');
        });
      },
      deleteCart(){
        this.$store.commit('CLEAR_CART');
        this.$router.push({name: "home"});
      }
    }
  };
  </script>
  
  <style scoped>
  .container{
    text-align: center;
    height: 40em;
    width: 40em;
    margin: auto;
    border-radius: 25px;
    border: 2px solid black;
    background-color: rgb(221, 218, 214);
  }
  @media only screen and (max-width: 425px) {
    .container{
        height: 100%;
        width: 100%;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 8px 0;
  }
  .total {
    margin-top: 20px;
    font-weight: bold;
  }
  .checkout {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #28a745; 
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .checkout:hover {
    background-color: #218838; 
  }
  .delete {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #f30505; 
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .delete:hover {
    background-color: #630000; 
  }
  </style>