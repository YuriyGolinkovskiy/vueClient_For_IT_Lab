<template>
    <v-container>
        <v-row>
            <product-info-component
                v-bind:product="$store.getters.getProductById"
            />
        </v-row>
        <product-photo-dialog />
    </v-container>
</template>

<script>
import ProductInfoComponent from '../components/productComponents/ProductInfoComponent.vue';
import ProductPhotoDialog from '../components/productComponents/ProductPhotoDialog.vue';
export default {
    components: { ProductInfoComponent, ProductPhotoDialog },
};
</script>

<style></style>
