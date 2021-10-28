<template>
    <v-container>
        <v-row class="myRow">
            <product-component
                v-for="product in $store.getters.getProductsInCategory"
                :key="product.id"
                v-bind:product="product"
            />
        </v-row>
    </v-container>
</template>

<script>
import ProductComponent from '../components/productComponents/ProductComponent.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
    components: { ProductComponent },
    created() {
        this.setCurrentProducts(this.getCurrentCategoryId());
    },
    methods: {
        ...mapMutations(['setCurrentProducts']),
        ...mapGetters(['getCurrentCategoryId']),
    },
};
</script>

<style>
.myRow {
    margin: 0 auto;
}
</style>
