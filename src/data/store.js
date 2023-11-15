
import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",

    endPoint: {
        movies: "search/movie",
        serieTv: "search/tv"
    },

    params: {
        myapi_key: "e283e0e72de0c7e59c51a9bf36b8421c",
        query: "a",
    },


    movieList: [],
    serieTvList: []

});
