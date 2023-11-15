<template>
    <div>
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo - originale }}</h2>
        <h2>{{ lingua }}</h2>
        <h2>{{ voto }}</h2>

    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'MainApp',
    props: [
        'titolo',
        'titolo-originale',
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