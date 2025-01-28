<template>
    <div class="itemCard" id="{{ item.id }}">
        <div class = "dropdown">
            <h2>{{ item.name }}</h2>
            <div class ="dropdown-content">
                <p class="description" >{{ item.description }}</p>
            </div>
        </div>
        <img :src="item.imageUrl" alt="">
        <div class="cartFunction">
            <div class="inputField">
                <input type="number" v-model="quantity" min="0" name="quantity" placeholder="Enter Quantity" id="">
            </div>
            <div class="buttonField">
                <p @click="addToCart(), check = !check" class="addCart">Add to Cart</p>
                <div v:show= "check" class="checkmark"></div>
            </div>
        </div>

    </div>
</template>

<script>

import itemService from "../services/ItemService.js";
    
export default {
    data(){
        return{
            show:false,
            quantity: 0,
            check: false


        }
    },
    props:{
        item: Object
    },
    methods:{
        addToCart() {
      // Ensure quantity is a positive number
      if (this.quantity > 0) {
        this.$store.commit('ADD_TO_CART', {
          item: this.item,
          quantity: this.quantity
        });
        alert("Added to cart!");
        // Reset quantity after adding to cart
        this.quantity = 0;
    }
}
    }
}
</script>


<style scoped>

/* .checkmark {
      display: inline-block;
      transform: rotate(45deg);
      height: 25px;
      width: 12px;
      margin-left: 60%; 
      border-bottom: 7px solid #78b13f;
      border-right: 7px solid #78b13f;
    } */
.itemCard{
    margin-bottom: 20px;
    background-color: white;
    border-radius: 25px;
    border: 2px solid black;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 600px;
    background-color: rgb(221, 218, 214);
}
@media only screen and (max-width: 425px) {
    .itemCard{
        width: 90%;

    }
}

h2{
    font-size:30px;
}
img{
    align-self: center;
    flex-basis: 60%;
    width: 300px;
    height: 300px;

    border-radius: 25px;
  border: 2px solid white;
}
input{
    width: 100px;
    flex-basis: 50%;
    align-self: center;
    justify-self: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.addCart{
    border-radius: 25px;
    border: 2px solid black;
    padding: 10px;
    margin-top: 0;
    flex-basis: 50%;
}

.addCart:hover {
    background-color: green;
}
.cartFunction{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-sizing: border-box;
}
</style>