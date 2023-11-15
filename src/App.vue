<template>
  <div>
    CIAO
  </div>
</template>

<script>
import axios from 'axios'
import { store } from './data/store.js';
export default {
  name: 'App',
  components: {

  },
  data() {

    return {
      store
    }
  },

  methods: {
    getMovie() {
      const movie = store.apiUrl + store.endPoint.movies
      axios.get(movie, { params: this.store.params }).then((res) => {
        console.log(res)

      })

    }

  },
  created() {
    this.getMovie();
  }

}
</script>

<style lang="scss" scoped></style>