<template>
    <v-container>
        <v-row class="myRow">
            <catalog-component
                v-for="catalog in $store.getters.getAllCatalogs"
                :key="catalog.id"
                v-bind:catalog="catalog"
            />
        </v-row>
    </v-container>
</template>

<script>
import CatalogComponent from '../components/catalogComponents/CatalogComponent.vue';
import { mapMutations } from 'vuex';
export default {
    components: {
        CatalogComponent,
    },
    data: () => ({}),
    created() {
        this.setCatalogs();
    },

    mounted() {},

    methods: {
        ...mapMutations(['setCatalogs']),
    },
};
</script>

<style scoped>
.myRow {
    margin: 0 auto;
}
</style>
