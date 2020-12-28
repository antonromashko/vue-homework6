<template>
  <div>
    <ul v-if="setArtistsData">
      <li v-for="artist in setArtistsData" :key="artist.index">
        <router-link :to="{ name: 'Artists', params: artist.name }">{{ artist.name }}</router-link>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>

</template>

<script>
import { actions, getters } from '@/store';

export default {
  name: "Artists",
  computed: {
    ...getters
  },
  methods: {
    ...actions
  },
  async beforeMount() {
    await this.getArtists();
    console.log(this.setArtistsData)
  }
}
</script>

<style scoped>

</style>