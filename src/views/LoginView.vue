<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <h1>Please Sign In</h1>
      <br>
      <div id="fields">
        <!-- <label for="username">Username</label> -->
        <input
          type="text"
          id="username"
          placeholder="Username"
          v-model="user.username"
          required
          autofocus
        />
        <!-- <label for="password">Password</label> -->
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
        <br>
        <div><button type="submit">Sign in</button></div>
      </div>
      Need an account? <router-link v-bind:to="{ name: 'register' }" class="register">Register!</router-link>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password!");
          } else {
            alert(response.message);
          }
        });
    },
  },
};
</script>

<style scoped>

#login {
  background-color: white;
  width: 750px;
  height: 50vh;
  margin: auto;
  margin-top: 200px;
  border-radius: 25px;
  border: 2px solid black;
  background-image: url("C:\Users\Student\workspace\zachary-lindemuth-student-code\java\module-3\module3-final-project\client\src\assets\main-page.jpeg");
  background-repeat: no-repeat;
  background-size: cover;  
  color:black;
}

label{
  text-align: left;
  background-color: white;
  border-radius: 25px;
  border: 1px solid white;
}

#fields{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top:0px;
  margin-bottom: 0px;
  flex-basis: 50%;
}


form > *{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin: auto;
  font-size: 30px;

}

form{
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  
}
hr{
  flex-basis: 0%;
}
.register{
  text-decoration: none;
  color:white;
  font-size: 30px;
}
</style>
