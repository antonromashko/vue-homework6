<template>
  <div>
    <div id="nav">
      |
      <template v-for="(route, idx) in navRoutes">
        <router-link :to="route.path" :key="idx">{{ route.name }}</router-link> |
      </template>
    </div>
    <div class="nav-buttons">
      <button type="button" @click="prev">prev</button>
      <button type="button" @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    navRoutes() {
      return this.$router.options.routes.filter(route => 'name' in route && route.meta.mainNav)
    }
  },
  methods: {
    next() {
      this.$router.go(1)
    },
    prev() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>