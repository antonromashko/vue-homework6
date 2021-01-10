<template>
<div>
    <p class="counter">{{ counter }}</p>
    <div class="actions">
      <div class="actions-inner">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Counter",
  computed: {
    ...mapState({
      counter: state => state.counter.counter
    })
  },
  methods: {
    increment: function () {
      this.$store.commit('counter/increment')
    },
    decrement: function () {
      this.$store.commit('counter/decrement')
    }
  },
}
</script>

<style scoped>

</style>