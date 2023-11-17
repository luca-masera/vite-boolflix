<template>
  <div class="box">
    <SearchBar @searchMovie=searchFilm />
  </div>
  <div class="background-wrapper">
    <div>
      <h2 v-if="store.movieList.length" class="pt-3">FILM</h2>
    </div>


    <div id="movie" class="container d-flex flex-wrap  ">


      <div class="row d-flex flex-wrap" v-for="(movie, index) in store.movieList" :key="movie.id">
        <MainAppMovie :titolo="movie.title" :titolo_originale="movie.original_title" :lingua="movie.original_language"
          :voto="movie.vote_average" :immagine="movie.poster_path" :overview="movie.overview
          " />

      </div>
    </div>
    <h2 v-if="store.serieTvList.length">SERIE TV</h2>
    <div id="serieTV" class="container d-flex flex-wrap  ">

      <div class=" row d-flex flex-wrap" v-for="(serieTv, index) in store.serieTvList" :key="serieTv.id">
        <MainAppMovie :titolo="serieTv.name" :titolo_originale="serieTv.original_name" :lingua="serieTv.original_language"
          :voto="serieTv.vote_average" :immagine="serieTv.poster_path" :overview="serieTv.overview" />

      </div>



    </div>
  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue';
import axios from 'axios'
import { store } from './data/store.js';
import MainAppMovie from './components/MainAppMovie.vue';


export default {
  name: 'App',
  components: {
    SearchBar,
    MainAppMovie,

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

<style lang="css" scoped>
.background-wrapper {
  background-color: rgb(58, 55, 55);
}

.box {

  height: 130px;
  background-color: black;
}


h2 {
  color: greenyellow;
  text-align: center;
}
</style>
