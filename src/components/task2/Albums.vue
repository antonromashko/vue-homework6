<template>
  <div>
      <div v-for="(album, idx) in getAlbums" :key="idx">
        <router-link
            :to="{
            name: 'Songs',
            params: { name: album.name },
            query: {compositions: JSON.stringify(album.compositions), about: album.about}
        }"
        >
          {{ album.name }}
        </router-link>
      </div>
      <router-view name="Songs"/>
  </div>
</template>

<script>
// import {actions, getters} from "@/store";
import { mapState } from 'vuex';

export default {
  name: "Albums",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      setArtistsData: state => state.setArtistsData
    }),
    // ...getters,
    getAlbums() {
      if (this.setArtistsData.length > 0) {
        return this.setArtistsData.filter(item => item.index.toString() === this.id)[0].album
      }
      return []
    }
  },
  // methods: {
  //   ...actions
  // },
  async beforeMount() {
    await this.$store.dispatch('GET_ARTISTS');
  }
}
</script>

<style scoped>

</style>