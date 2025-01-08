import axios from 'axios';

export default {

  checkoutCart(cartItems) {
    return axios.post('/order/checkout', cartItems)
  }

}