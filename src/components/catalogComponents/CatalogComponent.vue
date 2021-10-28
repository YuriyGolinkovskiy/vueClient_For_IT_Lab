<template>
    <div class="catalog">
        <v-col xs12 sm6 md4>
            <v-card
                class="text-center"
                elevation="4"
                @mousedown="openPhoto"
                @mouseup="$router.push(`/catalog/${catalog.title}`)"
            >
                <v-img max-height="180px" max-width="300px" :src="catalog.url">
                </v-img>

                <v-card-title class="justify-center">{{
                    catalog.title
                }}</v-card-title>
            </v-card>
        </v-col>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        catalog: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        ...mapMutations([
            'setCurrentPhoto',
            'setCurrentProducts',
            'showDialog',
        ]),
        openPhoto() {
            this.setCurrentProducts(this.catalog.id);
        },
    },
};
</script>

<style scoped>
.catalog {
    margin: 0 auto;
}
</style>
