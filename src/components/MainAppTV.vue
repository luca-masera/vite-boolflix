<template>
    <div class=" bg-white d-flex flex-column align-items-center m-5  box-serieTv ">

        <h5>Titolo: {{ title }}</h5>
        <h5>Titolo originale: {{ title_original }}</h5>
        <div>
            <img :src="addFlagSerieTv" :alt="language + 'flagTv'">
            <img :src="imagePathTv" />
        </div>
        <div>
            <i v-for="num in 5" :key="num" class="fa-star" :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'"></i>
        </div>
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

.box-serieTv {
    height: 300px;
    width: 250px;
}
</style>