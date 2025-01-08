<template>
  <div id="cart-app">
    <header></header>
    <nav>
      <router-link v-bind:to="{ name: 'home' }" id="logo">
        <img src="src\assets\logo.png" alt="logo">
      </router-link>
      <div class="dropdown">
      <router-link   v-bind:to="{name: 'myCart'}" class='myCart' v-if="$store.state.token">Cart</router-link>
        <cart-card v-if="$route.name !== 'myCart'" class="dropdown-content"></cart-card>
      </div>
      <router-link v-bind:to="{ name: 'admin' }" v-if="$store.state.user.role == 'ROLE_ADMIN'" class="adminLink">
          Admin
        </router-link>
      <router-link v-bind:to="{ name: 'myOrders' }" v-if="$store.state.token" class="orderLink">
          Orders
        </router-link>
        <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token" class="login-logout">
          Logout
        </router-link>
        <router-link v-bind:to="{ name: 'login' }" v-else class="login-logout">Login</router-link>

    </nav>
    <main>
      <router-view class="mainView" />
    </main>
    <footer> Content Here</footer>
  </div>
</template>

<script>
import CartCard from "../src/components/CartCard.vue"
  export default {
    components:{
      CartCard
    },
  computed: {
    homePage() {
      let response = false
      if(this.$route.name == 'home'){
        response = true;
      }
      return response;
      // Get the product from Vuex or an API
    }
  }
};
</script>

<style scoped>
body{
  overflow: hidden;
  
}
#cart-app{
  overflow-x: hidden;
  overflow-y: hidden;
}

main{
  width: 100vw;
  height: 100%;
  margin-top: 80px;
  margin-left: 5em;
  overflow-y: hidden;
  overflow-x: hidden;
  /*background-color: rgb(238, 233, 233);
  */
}


nav{
  position:fixed;
  top:0;
  left:0;
  height: 80px;
  text-align: right;
  vertical-align: middle;
  background: white;
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  grid-area:nav;
  z-index: 2;
  border-bottom: 2px solid black;
  background-color: rgb(221, 218, 214);
  

}
#logo{
  flex-basis: 80%;
}
nav img{
  width: 78px;
  height: 78px;
  
}
.login-logout{
  text-align: center;
  text-decoration: none;
 font-size: 30px;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
  margin-right: 20px;

  
}
.orderLink{
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
}
.adminLink{
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
}

.myCart{
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
}
footer{
  grid-area:footer;
  position:fixed;
  bottom:0;
  left: 0;
  width: 100vw;
  border-top: 1px solid black;
  z-index: 2;
  background-color: white;
  color:black;
}
.dropdown {
  margin-top: 22px;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 50px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media only screen and (max-width: 425px) {
  nav{
    height: 320px;
    display:flex;
    flex-direction: column;
  }
  .cart-app{
    display:grid;
    grid-template-rows: 1fr 3fr  ;
    grid-template-areas: "header"
    "main";
  }
  nav img{
  width: 78px;
  height: 78px;
  grid-area: header;

  
}
.login-logout{
  text-align: center;
  text-decoration: none;
 font-size: 30px;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
  margin-right: 20px;
  grid-area: login;

  
}
.orderLink{
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  grid-area: order;
  
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
}
.adminLink{
  display:none;
}

.myCart{
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 100px;
  }
  main{
  grid-area: main;
}
.dropdown{
  text-align: left;
}
main{
  width: 100vw;
  height: 100%;
  margin-top: 320px;
  margin-left: 0;
  overflow-y: hidden;
  overflow-x: hidden;

  }
}

</style>