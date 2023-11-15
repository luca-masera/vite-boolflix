<template>
    <div>
        <input type="text" class="form-control" id="search" placeholder=" Quale film vuoi guardare?" v-model="text"
            @change="$emit('searchMovie', text)">
        <label for="search"></label>

        <button type="button" class="btn btn-danger mt-3 ms-5 mb-4" @click="$emit('searchMovie', text)">Invia</button>
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

<style lang="scss" scoped></style>