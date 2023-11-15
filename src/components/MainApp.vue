<template>
    <div class="container bg-danger bg ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <h2>{{ lingua }}</h2>
        <h2>{{ voto }}</h2>
    </div>
    <div class="container bg-info ">
        <h2>{{ title }}</h2>
        <h2>{{ title_original }}</h2>
        <h2>{{ language }}</h2>
        <h2>{{ vote }}</h2>
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
        'voto',
        'title',
        'title_original',
        'language',
        'vote'
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