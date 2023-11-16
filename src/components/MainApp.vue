<template>
    <div class="container bg-danger bg ">
        <h2>{{ titolo }}</h2>
        <h2>{{ titolo_originale }}</h2>
        <span>
            <img :src="addFlagTv" :alt="lingua + 'flag'">
        </span>
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
            flags: [
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
        addFlagTv() {
            let flag = `/images/${this.lingua}.png`;

            if (!this.flags.includes(this.lingua)) {
                flag = `/images/fake.png`

            }
            return flag
        },


    }

}
</script>

<style lang="scss" scoped></style>
{{}}