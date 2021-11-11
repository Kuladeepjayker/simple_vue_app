<template>
    <div id='app'>
      <h1 style="text-align:center">CIE Web App</h1>
        <div class="dataDisplay">
                <div class="card">
                  <table>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>City</th>

                    </tr>
                    <tr v-for='user in this.datapacket' :key='user.id'>
                      <td>{{user.id}}</td>
                      <td>{{user.name}}</td>
                      <td>{{user.email}}</td>
                      <td>{{user.address.street}}</td>
                    </tr>
                  </table>
                </div>
                <button id="btn" @click='logout()'>Logout</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      datapacket : [],
    }
  },

  methods: {
    logout: function(){
      localStorage.clear();
      this.$router.push({name:'login'})
    }
  },


  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((Res)=>{
      this.datapacket = Res.data;
      console.log("kuladeep",Res);
    })
  },

}
</script>
<style media="screen">

table {
  font-family: monospace;
  font-size: 18px;
  border-collapse: collapse;
  width: 100%;
}

.filterBox {
  margin-left: 15%;
  font-family: monospace;
  font-size: 18px;
  margin-bottom: 0.5em;
}

.popup {
  display: grid;
  grid-template-columns: 30% 30% 40%;
  background-color: gray;
  padding: 10px;
}

#btn {
  text-decoration: none;
  border: none;
  outline-style: none;
  width:100px;
  height: 35px;
  float:right;
  margin-right: 20em;
  cursor: pointer;
  border-radius: 20px;
  background: #8aa66f;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}

.card{
  margin: 40%;
  overflow-x: auto;
  height: 500px;
  border-radius:5px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.473);
  transition: 0.3s;
  padding: 1.4em;
  background-color : #dddddd;
  margin: 20px 200px 30px 200px;
}

td, th {
  border: 1px solid #dddddd;
  border-radius:5px;
  text-align: center;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #fffcf4;
}

tr{
  background-color: #ffffff;
}

</style>
