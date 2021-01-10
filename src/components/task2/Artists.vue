<template>
  <div class="artists">
    <div v-if="setArtistsData">
      <div v-for="artist in setArtistsData" :key="artist.index">
        <router-link
            :to="{ name: 'Albums', params: { id: artist.index.toString() } }"
            :style="adaptViewed(artist.index.toString())"
        >{{ artist.name }}</router-link>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>

</template>

<script>
// import { actions, getters } from '@/store';
import {mapState} from "vuex";

export default {
  name: "Artists",
  computed: {
    // ...getters
    ...mapState({
      setArtistsData: state => state.setArtistsData,
      viewedArtistsData: state => state.viewedArtistsData
    })
  },
  methods: {
    // ...actions
    adaptViewed(id) {
      if (id in this.viewedArtistsData) {
        return {
          color: 'darkgreen'
        }
      } else {
        return {}
      }
    }
  },
  async beforeMount() {
    // await this.getArtists();
    await this.$store.dispatch('GET_ARTISTS');
    const viewedData = localStorage.getItem('viewedData');
    console.log(viewedData)
    this.$store.commit('SET_VIEWED_ARTISTS_DATA', viewedData)
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.commit('PUSH_VIEWED_ARTISTS_DATA', to.params.id);
    localStorage.setItem('viewedData', JSON.stringify(this.viewedArtistsData));
    next()
  },
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