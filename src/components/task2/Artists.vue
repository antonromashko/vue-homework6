<template>
  <div class="artists">
    <div v-if="setArtistsData">
      <div v-for="artist in setArtistsData" :key="artist.index">
        <router-link :to="{ name: 'Albums', params: { id: artist.index.toString() } }">{{ artist.name }}</router-link>
      </div>
    </div>
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
  }
}
</script>

<style scoped>
.artists {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow: scroll;
  width: 250px;
  border: 1px solid grey;
  height: 100%;
}
</style>