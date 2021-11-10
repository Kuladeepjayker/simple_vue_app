<template>
    <div id='app'>
      <VueSparkles>
      <h1 style="text-align:center">Web App</h1>
      </VueSparkles>
        <div class="dataDisplay">
                <div class="card">
                  <table>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Journal</th>
                      <th>Year</th>
                    </tr>
                  </table>
                </div>
                <button>Next</button>
            </div>
    </div>
</template>

<script>
export default {
  name: 'home',

  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name:'login'})
    }
  },
}
</script>

<style lang="css" scoped>
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

button {
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
