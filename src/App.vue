<template>
  <section class="container">
    <div class="row">
      <div v-for="(movie, index) in store.movieList">
        {{ movie.title }} {{ movie.original_title }} {{ movie.original_language
        }} {{ movie.vote_average }}

      </div>

    </div>

  </section>
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
        console.log(res.data.results)
        store.movieList = (res.data.results)

      })

    }

  },
  created() {
    this.getMovie();
  }

}
</script>

<style lang="scss" scoped></style>
