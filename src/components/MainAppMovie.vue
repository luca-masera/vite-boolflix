<template>
    <div class="container bg-danger bg ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <span>
            <img :src="addFlagTv" :alt="lingua + 'flag'">
        </span>
        <span>

        </span>
        <h2>{{ voto }}</h2>
    </div>
</template>

<script>

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
            ]

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