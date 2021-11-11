<template>

  <transition
  mode='out-in'
  enter-active-class='animate__animated animate__fadeIn'
  leave-active-class='animate__animated animate__fadeOut'
  >
  <router-view></router-view>
  </transition>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
