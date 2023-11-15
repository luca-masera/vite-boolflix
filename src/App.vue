<template>
  <section class="container">
    <SearchBar @searchMovie=searchFilm />
    <div class="row">
      <div v-for="(movie, index) in store.movieList">
        <MainApp :titolo="movie.title" :titolo_originale="movie.original_title" :lingua="movie.original_language" :voto="movie.vote_average
        " />
        <MainApp />

      </div>

    </div>



  </section>
</template>

<script>
import SearchBar from './components/searchBar.vue';
import axios from 'axios'
import { store } from './data/store.js';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    MainApp
  },
  data() {

    return {
      store
    }
  },

  methods: {
    searchFilm(resp) {
      console.log(resp)
      if (resp != '') {

        this.store.params = {
          api_key: "e283e0e72de0c7e59c51a9bf36b8421c",
          query: resp,
        }
      }
      this.getMovie()


    },

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
