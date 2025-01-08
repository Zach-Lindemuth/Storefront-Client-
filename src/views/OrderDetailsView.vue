<template>
    <table>
        <tr class ="invoice-info">
        <th>Order Number: {{ order.id }}</th>
        <th>Items Ordered: {{ getQuantity() }}</th>
        <th>Ship Date: {{order.dateOrdered}}</th>
        <th>
            <router-link v-bind:to="{ name: 'order', params:{orderId: order.id} }"> View Order</router-link> 
        </th>
        </tr>
        <tr>
            <th class="tbl-head tbl-slot">Item</th>
            <th class="tbl-head tbl-slot">Quantity</th>
            <th class="tbl-head tbl-slot">Unit Cost</th>
            <th class="tbl-head tbl-slot">Total Cost</th>
        </tr>   
        <tr v-for="cartItem in order.cart" v-bind:key="cartItem.orderId" class="order-data">
           <td class="td tbl-slot">{{ cartItem.item.name }}</td>
            <td class="td tbl-slot">{{ cartItem.quantity }} </td>
            <td class="td tbl-slot"> {{ cartItem.item.price }} </td>
            <td class="td tbl-slot"> {{getTotal(cartItem.quantity,cartItem.item.price ) }}</td>

        </tr>
    </table>
</template>


<script>

import orderService from '../services/OrderService';
    export default {
        data(){
            return{
                order: {},
                orders: []
            }
        },
        methods:{
            getQuantity(){
                let totalItems = 0;
                this.order.cart.forEach((item) => {
                    totalItems = totalItems+ item.quantity;
                });
                return totalItems;
            },
            getTotal(quantity, price){
                return (quantity * price).toFixed(2);
            },
            getOrder() {
            orderService.get().then((response) => {
                this.orders = response.data;
                console.log(this.$route.params.orderId);
                this.orders.forEach((order) => console.log(order.id));
                this.order = this.orders[this.orders.findIndex((order) => order.id == this.$route.params.orderId)]; 
            });
        }
        },
        created(){
            this.getOrder();
            
        }
        
    }
</script>

<style scoped>

table{ 
    background-color: white;
    border: 2px solid black;
    border-bottom: 1px solid black;
    box-sizing: border-box; 
    width: 80%;
    margin: auto;
}
.order-data{
    
}
.tbl-head{
    text-align: left;
}
.invoice-info >*{
    border-bottom: 1px dotted black;
}
.tbl-slot{
    width:25%;
}

</style>