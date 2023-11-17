<template>
    <div class="bg-danger d-flex flex-column align-items-center m-5 box-movie  ">
        <h5>Titolo : {{ titolo }}</h5>
        <h5>Titolo originale: {{ titolo_originale }}</h5>
        <div>
            <img :src="addFlagTv" :alt="lingua + 'flag'">
            <img :src="imagePath" />
        </div>
        <div>
            <i v-for="num in 5" :key="num" class="fa-star" :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'"></i>
        </div>


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
        'voto',
        'immagine'


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
            let image = store.img + this.immagine

            if (this.immagine === null) {
                image = '/images/stop.png'
            }
            console.log(image)
            return image
        }
    }
}

</script>

<style lang="css" scoped>
img {
    width: 50px;
}

.box-movie {
    height: 300px;
    width: 250px;


}
</style>
