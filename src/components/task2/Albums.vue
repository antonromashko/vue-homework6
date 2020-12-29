<template>
  <div>
      <div v-for="(album, idx) in getAlbums" :key="idx">
        <router-link :to="{ name: 'Songs', params: { name: album.name }, query: {compositions: JSON.stringify(album.compositions)} }">{{ album.name }}</router-link>
      </div>
      <router-view name="Songs"/>
  </div>
</template>

<script>
import {actions, getters} from "@/store";

export default {
  name: "Albums",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...getters,
    getAlbums() {
      if (this.setArtistsData.length > 0) {
        return this.setArtistsData.filter(item => item.index.toString() === this.id)[0].album
      }
      return []
    }
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

</style>