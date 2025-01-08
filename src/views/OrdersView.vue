<template>
    <div>
        <order-card v-for="order in orders" v-bind:order="order" v-bind:key="order.id" class="order-card"></order-card>
    </div>
</template>

<script>

import orderService from "../services/OrderService.js"
import OrderCard from "../components/OrderCard.vue"
    export default {
        data(){
            return{
                orders: []
            }
        },
        components: {
            OrderCard
        },
        methods: {
    loadOrders(){
            orderService.get().then((response) =>{
                this.orders=response.data;
            });
        }
      },
        created(){
            this.loadOrders();
        }
    }
</script>

<style  scoped>
</style>