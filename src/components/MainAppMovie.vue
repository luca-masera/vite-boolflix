<template>
    <div class="container bg-danger bg ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <span>
            <img :src="addFlagTv" :alt="lingua + 'flag'">
            <img :src="imagePath" />
        </span>
        <span>
            <i v-for="num in 5" :key="num" class="fa-star" :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'">{{ getStar
            }}</i>
        </span>
        <h2>{{ voto }}</h2>
    </div>
</template>

<script>
import { store } from '../data/store.js';
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
        imagePath() {

            const image = store.img
            axios.get(image + this.poster_pach).then((response) => {
                console.log(response)

            })

        }
    }

}


</script>

<style lang="css" scoped>
img {
    width: 50px;
}
</style>
{{}}