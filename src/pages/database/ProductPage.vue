<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left" style="width:5%">
                            Name
                        </th>
                        <th class="text-left" style="width:5%">
                            About
                        </th>
                        <th class="text-left" style="width:5%">
                            Price
                        </th>
                        <th class="text-left" style="width:80%">
                            Url
                        </th>
                        <th class="text-left" style="width:5%">
                            Update
                        </th>
                        <th class="text-left" style="width:5%">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item._id">
                        <td><input class="" v-model="item.name" /></td>
                        <td>
                            <input class="" v-model="item.about" />
                        </td>
                        <td><input class="" v-model="item.price" /></td>
                        <td><input class="inp" v-model="item.url" /></td>
                        <td>
                            <v-btn type="submit" @click="updateProduct(item)"
                                >U</v-btn
                            >
                        </td>
                        <td>
                            <v-btn @click="deleteProduct(item._id)">X</v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <h2>Добавление товара</h2>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider v-slot="{ errors }" name="Name" required>
                    <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="Название товара"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="about">
                    <v-text-field
                        v-model="about"
                        :error-messages="errors"
                        label="Описание"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="price">
                    <v-text-field
                        v-model="price"
                        :error-messages="errors"
                        label="Цена"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="url"
                    rules="required"
                >
                    <v-text-field
                        v-model="url"
                        :error-messages="errors"
                        label="Ссылка на картинку"
                        required
                    ></v-text-field>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                    Отправить
                </v-btn>
                <v-hover open-delay="100" close-delay="100" v-slot="{ hover }">
                    <v-btn :class="{ 'on-hover': hover }" @click="clear">
                        Очистить форму
                    </v-btn>
                </v-hover>
            </form>
        </validation-observer>
    </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import item from '../../actions/item.js';
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        products: [],
        name: '',
        about: '',
        price: '',
        url: '',
    }),
    methods: {
        addProduct() {
            item.addProduct({
                name: this.name,
                about: this.about,
                price: this.price,
                url: this.url,
            });

            this.$router.go(0);
        },
        updateProduct(product) {
            item.updateProduct(product);
        },
        deleteProduct(id) {
            item.deleteProduct(id);
            this.$router.go(0);
        },
        getProducts() {
            item.getProducts().then((res) => {
                this.products = res.data;
            });
        },

        submit() {
            this.$refs.observer.validate();
            this.addProduct();
            this.clear();
        },
        clear() {
            this.name = '';
            this.about = '';
            this.price = '';
            this.url = '';
            this.$refs.observer.reset();
        },
    },
    created() {
        this.getProducts();
    },
};
</script>

<style scoped>
.inp {
    width: 100%;
}
h2 {
    margin-top: 30px;
    text-align: center;
}
</style>
