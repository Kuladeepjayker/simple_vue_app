<!-- <template>
  <div class="main">
    <img src="../assets/logo.png" alt="">
    <h1>Signup</h1>
    <div>
        <input type="text" v-model="name" placeholder="name"><br><br>
        <input type="text" v-model="password" placeholder="Password"><br><br>
        <button type="button" @click="login()">SignUp</button><br><br>
        <router-link :to="{ name: 'login'}">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signup',
  data() {
    return {
      name:'',
      password:'',
    }
  },
  methods: {
    login: async function(){
      let result = await axios.get('http://localhost:3000/user?name=Kuladeep&password=password')
      console.warn('warning',result);
    }
  }
}
</script>

<style lang="css" scoped>
</style> -->
