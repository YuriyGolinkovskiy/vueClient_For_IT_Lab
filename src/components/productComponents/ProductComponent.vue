<template>
    <div class="product">
        <v-col xs12 sm6 md4>
            <v-card
                class="text-center"
                v-if="this.$route.path == '/cart'"
                elevation="4"
                @mousedown="openProduct"
                @mouseup="$router.push(`/product/${product._id}`)"
            >
                <v-img
                    :aspect-ratio="1"
                    max-width="300px"
                    max-height="180px"
                    :src="product.url"
                />
                <v-card-title class="justify-center">{{
                    product.name
                }}</v-card-title>
                <v-card-subtitle>Цена: {{ product.price }} </v-card-subtitle>
                <v-card-text
                    ><div>Количество: {{ product.quantity }}</div>
                    <div>
                        Общая стоимость: ${{
                            Number(product.totalPrice).toFixed(2)
                        }}
                    </div>
                </v-card-text>
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
                <v-btn class="delButton" absolute fab top small>
                    <v-hover
                        open-delay="200"
                        close-delay="200"
                        v-slot="{ hover }"
                    >
                        <v-icon
                            dense
                            :class="{ 'on-hover': hover }"
                            size="40px"
                            v-on:mousedown.stop
                            v-on:mouseup.stop
                            @click="removeFromCart(product)"
                        >
                            {{ iconCart }}
                        </v-icon>
                    </v-hover>
                </v-btn>
            </v-card>
            <v-card
                v-else
                class="text-center"
                elevation="4"
                @mousedown="openProduct"
                @mouseup="$router.push(`/product/${product._id}`)"
            >
                <v-img
                    :aspect-ratio="1"
                    max-width="300px"
                    max-height="180px"
                    :src="product.url"
                />

                <v-card-title class="justify-center">{{
                    product.name
                }}</v-card-title>
                <v-card-subtitle>Цена: ${{ product.price }}</v-card-subtitle>

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
            </v-card>
        </v-col>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data: () => ({
        iconCart: 'mdi-delete',
    }),
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapMutations(['setCurrentProduct', 'addToCart', 'removeFromCart']),
        openProduct() {
            this.setCurrentProduct(this.product._id);
        },
    },
};
</script>

<style scoped>
.product {
    margin: 0 auto;
}

.addButton {
    margin-bottom: 1.4em;
    width: 80%;
}
.v-card__text {
    font-weight: 600;
}
.v-icon.on-hover {
    color: #d32f2f;
}
.delButton {
    top: 0px;
    right: 0px;
    margin-top: 2em;
    margin-right: 0.5em;
}
.v-card.on-hover {
    background: #d32f2f;
}
</style>
