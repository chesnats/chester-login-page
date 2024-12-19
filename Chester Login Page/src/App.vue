<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html,body{
  background-color: rgb(0, 0, 0);
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;
  z-index: -1;
}
html {
    scroll-behavior: smooth;
  }
</style>
