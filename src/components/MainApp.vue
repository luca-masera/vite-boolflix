<template>
    <div class="container bg-danger ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <h2>{{ lingua }}</h2>
        <h2>{{ voto }}</h2>
    </div>
    <div class="container bg-blue ">
        <h2>{{ }}</h2>
        <h2>{{ }}</h2>
        <h2>{{ }}</h2>
        <h2>{{ }}</h2>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'MainApp',
    props: [
        'titolo',
        'titolo_originale',
        'lingua',
        'voto'
    ],


    data() {

        return {
            store
        }

    }




}
</script>

<style lang="scss" scoped></style>
{{}}