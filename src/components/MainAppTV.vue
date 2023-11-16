<template>
    <div class="container bg-info ">
        <h2>{{ title }}</h2>
        <h2>{{ title_original }}</h2>
        <div>
            <img :src="addFlagSerieTv" :alt="language + 'flagTv'">
            <img :src="imagePathTv" />
        </div>
        <i v-for="num in 5" :key="num" class="fa-star" :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'"></i>

    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'MainAppTV',
    props: [
        'title',
        'title_original',
        'language',
        'vote',
        'image'
    ],
    data() {

        return {
            flagTv: [
                'zh',
                'en',
                'es',
                'fr',
                'de',
                'india',
                'it',
                'ja',
                'usa'
            ]
        }
    },
    computed: {
        addFlagSerieTv() {
            let flagTv = `/images/${this.language}.png`;


            if (!this.flagTv.includes(this.language)) {
                flagTv = `/images/fake.png`

            }
            return flagTv
        },
        imagePathTv() {
            let immagine = store.img + this.image

            if (this.image === null) {
                immagine = '/images/stop.png'
            }
            console.log(immagine)
            return immagine
        },
        getStar() {
            return Math.ceil(this.vote / 2);
        }
    }

}
</script>

<style lang="css" scoped>
img {
    width: 50px;
}
</style>