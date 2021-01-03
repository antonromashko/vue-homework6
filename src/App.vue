<template>
  <div id="app">
    <Menu />
    <div class="main">
      <router-view name="Content"/>
      <router-view name="Albums"/>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/task1/Menu.vue";

export default {
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
