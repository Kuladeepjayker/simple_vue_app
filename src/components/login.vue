<template>
  <div class="main">
    <img src="../assets/trainin.jpeg" alt="">

    <h1>Login</h1>
    <div>
        <input type="text" v-model="name" placeholder="User_Name" required><br><br>
        <input type="text" v-model="password" placeholder="Password" required><br><br>
        <button type="button" @click="login()">Login</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'login',
    data() {
      return {
        name:'',
        password:'',
      }
    },
    methods: {
     login: async function() {
        var results = await axios.post("http://localhost:3000/user",{
          name: this.name,
          password: this.password,
        });
        console.log("WARNING: ",results);
        if (results.status==201) {
          window.alert('signin Done')
          // kuladeep
          localStorage.setItem('user-info',JSON.stringify(results.data));
          this.$router.push({name:'home'})

        }
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push({name:'home'})
      }
    }
}
</script>
<style>
.main{
  text-align: center;
}
img{
  height: 150px;
  width: 150px;
}
button{
  height: 30px;
  width: 200px;
}

input{
  height: 30px;
  width: 200px
}
</style>
