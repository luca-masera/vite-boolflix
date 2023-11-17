<template>
    <div class="d-flex flex-column align-items-center my-2 mx-2  box-movie">
        <div class="box-inner">
            <div class="box-text">
                <h5 class="color"><b>Titolo :</b> {{ titolo }}</h5>
                <h5 class="color"><b>Titolo originale:</b> {{ titolo_originale }}</h5>
                <div>
                    <img class="img-flags" :src="addFlagTv" :alt="lingua">

                </div>
                <div class="star-color">
                    <i v-for="num in 5" :key="num" class="fa-star"
                        :class="(num <= getStar) ? 'fa-solid' : 'fa-regular'"></i>

                </div>
                <div class="overflow color">
                    <b>Overview:</b> {{ overview }}
                </div>
            </div>
            <div class="box-image">
                <img class="img-movie" :src="imagePath" />
            </div>
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
        'immagine',
        'overview'


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
.img-movie {
    width: 100%;
}

.img-flags {
    width: 10px;
}

.box-movie {
    height: 335px;
    width: 250px;
    margin: 10px;
    background-color: transparent;
    perspective: 1000px;

}

.overflow {
    overflow-y: auto;
}

.color {
    color: white;
}

.star-color {
    color: yellow;
}

.box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: 1s;
    transform-style: preserve-3d;
}

.box-movie:hover .box-inner {
    transform: rotateY(180deg);
}

.box-image,
.box-text {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: black;
}

.box-image {
    color: aqua;

}

.box-text {
    transform: rotateY(180deg);
}
</style>
