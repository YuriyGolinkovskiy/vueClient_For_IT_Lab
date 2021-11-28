<template>
    <v-container fluid>
        <v-app-bar
            color="indigo darken-1"
            dark
            padless
            v-if="window.width < 780"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-spacer />
            <v-btn outlined class="md-6 butt"
                ><router-link to="/cart">
                    <v-row>
                        <v-col class="cont ">
                            <v-row class="test">
                                Товаров в корзине:
                                <b>{{ $store.getters.getCartCount }}</b></v-row
                            >
                            <v-row class="test"
                                >Итого:<b>${{ totalPrice }}</b></v-row
                            >
                        </v-col>
                        <v-col class="pad-r">
                            <v-icon size="40px">
                                {{ iconCart }}
                            </v-icon>
                        </v-col>
                    </v-row>
                </router-link></v-btn
            >
        </v-app-bar>
        <v-app-bar color="indigo darken-1" dark padless v-else>
            <v-img
                class=" md-2"
                :src="`${publicPath}img/logo.png`"
                max-height="55"
                max-width="55"
                contain
            ></v-img>
            <v-btn outlined class="ml-6 md-2 "
                ><router-link to="/">Главная</router-link></v-btn
            >
            <v-btn outlined class="ml-2 md-2"
                ><router-link to="/catalog">Каталог Товаров</router-link></v-btn
            >
            <v-btn outlined class="ml-2 md-2"
                ><router-link to="/feedBack">Обратная связь</router-link></v-btn
            >
            <v-btn outlined class="ml-2 md-2"
                ><router-link to="/admin">Админка</router-link></v-btn
            >
            <v-spacer />
            <v-btn outlined class="md-6 "
                ><router-link to="/cart">
                    <v-row>
                        <v-col class="cont">
                            <v-row class="test">
                                Товаров в корзине:
                                <b>{{ $store.getters.getCartCount }}</b></v-row
                            >
                            <v-row class="test"
                                >Итого:<b>${{ totalPrice }}</b></v-row
                            >
                        </v-col>
                        <v-col class="cont">
                            <v-icon size="40px">
                                {{ iconCart }}
                            </v-icon>
                        </v-col>
                    </v-row>
                </router-link></v-btn
            >
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute left temporary>
            <v-list nav dense>
                <v-app-bar-title>Меню</v-app-bar-title>
                <v-divider />
                <v-spacer />
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-title>Главная</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/catalog">
                        <v-list-item>
                            <v-list-item-title
                                >Каталог товаров</v-list-item-title
                            >
                        </v-list-item>
                    </router-link>

                    <router-link to="/feedBack">
                        <v-list-item>
                            <v-list-item-title
                                >Обратная связь</v-list-item-title
                            >
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        iconCart: 'mdi-cart-outline',
        publicPath: process.env.BASE_URL,
        drawer: false,
        group: null,
        window: {
            width: 0,
            height: 0,
        },
    }),
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let item of this.$store.state.cartModule.cart) {
                total += Number(item.totalPrice);
            }

            return total.toFixed(2);
        },
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>

<style scoped>
.container {
    padding: 0;
}
.row + .row {
    margin-top: 0;
}
.pad-r {
    padding-right: 0px;
}
.cont {
    position: relative;
    font-size: 0.7em;
}
.test {
    padding-top: 1.2em;
    margin: -0.6em;
}
.butt {
    padding: 0px !important;
}
.test > b {
    width: 0;
}
.v-btn {
    border: none;
}
.v-application a {
    color: #eeeeee;
    text-decoration: none;
}
</style>
