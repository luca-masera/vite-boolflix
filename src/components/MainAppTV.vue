<template>
    <div class="container bg-info ">
        <h2>{{ title }}</h2>
        <h2>{{ title_original }}</h2>
        <span>
            <img :src="addFlagSerieTv" :alt="language + 'flagTv'">
        </span>
        <h2>{{ vote }}</h2>
    </div>
</template>

<script>
export default {
    name: 'MainAppTV',
    props: [
        'title',
        'title_original',
        'language',
        'vote'
    ],
    data() {

        return {
            flagTv: [
                'ch',
                'en',
                'es',
                'fr',
                'gr',
                'india',
                'it',
                'jp',
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
        }
    }

}
</script>

<style lang="css" scoped>
img {
    width: 50px;
}
</style>