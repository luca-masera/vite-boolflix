<template>
  <section class="container">
    <SearchBar @searchMovie=searchFilm />
  </section>
  <div id="movie" class="container">
    <h3>Movies</h3>
    <div class="row">
      <div class="my-3" v-for="(movie, index) in store.movieList">
        <MainAppMovie :titolo="movie.title" :titolo_originale="movie.original_title" :lingua="movie.original_language"
          :voto="movie.vote_average" :immagine="movie.poster_path" />


      </div>
    </div>
    <div id="serieTv" class="container">
      <h3>serie Tv</h3>
      <div class="row">
        <div class="my-3" v-for="(serieTv, index) in store.serieTvList">
          <MainAppTV :title="serieTv.name" :title_original="serieTv.original_name" :language="serieTv.original_language"
            :vote="serieTv.vote_average" :image="serieTv.poster_path" />

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue';
import axios from 'axios'
import { store } from './data/store.js';
import MainAppMovie from './components/MainAppMovie.vue';
import MainAppTV from './components/MainAppTV.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    MainAppMovie,
    MainAppTV
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
          language: resp
        }
      }
      this.getMovie(),
        this.getSerieTv()


    },

    getMovie() {
      const movie = store.apiUrl + store.endPoint.movies
      axios.get(movie, { params: this.store.params }).then((res) => {
        console.log(res.data.results)

        store.movieList = (res.data.results)

      })

    },
    getSerieTv() {
      const movies = store.apiUrl + store.endPoint.serieTv
      axios.get(movies, { params: this.store.params }).then((res) => {
        console.log(res.data.results)
        store.serieTvList = (res.data.results)

      })

    }


  },
  created() {
    this.getMovie();
    this.getSerieTv();

  }

}
</script>

<style lang="scss" scoped></style>
