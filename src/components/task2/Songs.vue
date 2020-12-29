<template>
  <div>
    <ol>
      <li v-for="(album, idx) in JSON.parse($route.query.compositions.toString())" :key="idx">
        {{ album.name }}
    </li>
    </ol>

    <div class="summary">
        {{ duration }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Songs",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    compositions() {
      return JSON.parse(this.$route.query.compositions.toString());
    },
    duration() {
      let res = 0
      let delta = this.compositions.reduce((a, b) => {
        let parts = b.duration.split(":")
        return a + parseInt(parts[0])*60 + parseInt(parts[1])
      }, res)
      console.log(delta)
      let seconds = Math.floor(delta % 60);
      let minutes = Math.floor((delta / 60) % 60);
      let hours = Math.floor((delta / (60 * 60)) % 24) > 0 ? `${('0' + Math.floor((delta / (1000 * 60 * 60)) % 24)).slice(-2)}:` : '';
      return `${hours}${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    }
  }
}
</script>

<style scoped>

</style>