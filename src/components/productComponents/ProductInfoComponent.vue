<template>
    <v-container>
        <v-row no-gutters>
            <v-spacer />
            <v-col cols="5">
                <v-img
                    @click="openPhoto"
                    :aspect-ratio="1"
                    contain
                    max-width="400px"
                    max-height="300px"
                    :src="product.url"
            /></v-col>
            <v-spacer />
            <v-col cols="5"
                ><v-card-title>Название: {{ product.name }}</v-card-title>
                <v-card-title>Цена: ${{ product.price }}</v-card-title>
                <v-card-title
                    >Описание: {{ product.about }}
                </v-card-title></v-col
            >
            <v-spacer />
        </v-row>
        <v-btn
            class="addButton"
            v-on:mousedown.stop
            v-on:mouseup.stop
            @click="addToCart(product)"
        >
            <v-card-text>
                Добавить в корзину
            </v-card-text>
        </v-btn>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapMutations(['setCurrentPhoto', 'showDialog', 'addToCart']),
        openPhoto() {
            this.setCurrentPhoto(this.product);
            this.showDialog();
        },
    },
};
</script>

<style scoped>
.addButton {
    margin-bottom: 1.4em;
    width: 100%;
}
</style>
