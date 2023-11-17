<template>
    <div class="d-flex align-items-center container justify-content-between  ">
        <div class="ms-3">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="d-flex align-items-center">

            <input type="search" class="form-control  h-10 " id="search" placeholder=" Film o serie Tv?" v-model="text"
                @click="$emit('searchMovie', text)">
            <label for="search"></label>

            <button type="button" class="btn btn-danger mt-3 ms-5 mb-4" @click="$emit('searchMovie', text)">Invia</button>
        </div>


    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'SearchBar',


    data() {

        return {
            store,
            text: ''
        }
    }
}



</script>

<style lang="css" scoped>
h1 {
    color: red;
}

.h-10 {
    height: 44px;
}
</style>