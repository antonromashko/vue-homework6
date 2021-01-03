<template>
  <div>
    <ol>
      <li v-for="(album, idx) in compositions" :key="idx">
        {{ album.name }}
    </li>
    </ol>
    <div class="rating">
      <label for="rating">rate</label>
      <select name="rating" id="rating" @change="changeRate" v-model="rate">
        <option v-for="i in Array(10).keys()" :key="i">{{ i }}</option>
      </select>
    </div>
    <div class="summary">
        {{ duration }}
    </div>
    <div class="about">{{ about }}</div>
  </div>
</template>

<script>
export default {
  name: "Songs",
  data() {
    return {
      rate: 0
    }
  },
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
    about() {
      return this.$route.query.about
    },
    duration() {
      let res = 0
      let delta = this.compositions.reduce((a, b) => {
        let parts = b.duration.split(":")
        return a + parseInt(parts[0])*60 + parseInt(parts[1])
      }, res)
      let seconds = Math.floor(delta % 60);
      let minutes = Math.floor((delta / 60) % 60);
      let hours = Math.floor((delta / (60 * 60)) % 24) > 0 ? `${('0' + Math.floor((delta / (1000 * 60 * 60)) % 24)).slice(-2)}:` : '';
      return `${hours}${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    }
  },
  methods: {
    changeRate() {
      localStorage.setItem(this.name, this.rate);
    }
  },
  beforeRouteUpdate (to, from, next) {
    let rate = localStorage.getItem(to.params.name)
    this.rate = rate ? rate : 0
    next()
  },
  mounted() {
    let rate = localStorage.getItem(this.name)
    this.rate = rate ? rate : 0
  }
}
</script>

<style scoped>

</style>