<template>
    <div class="container bg-danger bg ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <div>
            <img :src="addFlagTv" :alt="lingua + 'flag'">
            <img :src="imagePath" />
        </div>

        <i v-for="num in 5" :key="num" class="fa-star" :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'"></i>

    </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios'
export default {

    name: 'MainAppMovie',
    props: [
        'titolo',
        'titolo_originale',
        'lingua',
        'voto'

    ],


    data() {

        return {
            flags: [
                'zh',
                'en',
                'es',
                'fr',
                'de',
                'india',
                'it',
                'ja',
                'usa'
            ],
            poster_pach: ''


        }

    },

    methods: {
        imagePath() {

            const image = store.img
            axios.get(image + this.poster_pach).then((response) => {
                console.log(response)

            })

        }

    },
    computed: {
        addFlagTv() {
            let flag = `/images/${this.lingua}.png`;

            if (!this.flags.includes(this.lingua)) {
                flag = `/images/fake.png`

            }
            return flag
        },
        getStar() {
            return Math.ceil(this.voto / 2);
        },

    },

    created() {
        this.imagePath()
    }
}


</script>

<style lang="css" scoped>
img {
    width: 50px;
}
</style>
{{}}