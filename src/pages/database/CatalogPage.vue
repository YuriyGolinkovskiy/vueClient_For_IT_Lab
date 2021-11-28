<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left" style="width:5%">
                            Title
                        </th>
                        <th class="text-left" style="width:35%">
                            Url
                        </th>
                        <th class="text-left" style="width:35%">
                            Products
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
                    <tr v-for="item in catalogs" :key="item._id">
                        <td><input class="" v-model="item.title" /></td>
                        <td><input class="url" v-model="item.url" /></td>
                        <td>
                            <v-select
                                v-model="item.products"
                                item-text="name"
                                item-value="_id"
                                :items="products"
                                label="Выбрать продукты"
                                multiple
                                chips
                                return-object
                                persistent-hint
                            ></v-select>
                        </td>
                        <td class="butt">
                            <v-btn type="submit" @click="updateCatalog(item)"
                                >U</v-btn
                            >
                        </td>
                        <td class="butt">
                            <v-btn @click="deleteCatalog(item._id)">X</v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <h2>Добавление каталога</h2>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider v-slot="{ errors }" name="Title" required>
                    <v-text-field
                        v-model="title"
                        :error-messages="errors"
                        label="Название каталога"
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
                <v-row class="center">
                    <v-col cols="12" sm="6">
                        <v-select
                            v-model="e7"
                            item-text="name"
                            item-value="_id"
                            :items="products"
                            label="Выбрать продукты"
                            multiple
                            chips
                            return-object
                            persistent-hint
                        ></v-select>
                    </v-col>
                </v-row>

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
        catalogs: [],
        e7: [],
        title: '',
        url: '',
        products: [],
    }),
    methods: {
        addCatalog() {
            item.addCatalog({
                title: this.title,
                url: this.url,
                products: this.e7,
            });
            this.$router.go(0);
        },
        getProducts() {
            item.getProducts().then((res) => {
                this.products = res.data;
            });
        },
        getCatalogs() {
            item.getCatalogs().then((res) => {
                this.catalogs = res.data;
            });
        },
        updateCatalog(catalog) {
            item.updateCatalog(catalog);
        },
        deleteCatalog(id) {
            item.deleteCatalog(id);
            this.$router.go(0);
        },
        submit() {
            this.$refs.observer.validate();
            this.addCatalog();
            this.clear();
        },
        clear() {
            this.title = '';
            this.url = '';
            this.e7 = [];
            this.$refs.observer.reset();
        },
    },
    created() {
        this.getCatalogs();
        this.getProducts();
    },
};
</script>

<style scoped>
h2 {
    margin-top: 30px;
    text-align: center;
}
.url {
    width: 100%;
}
.center {
    justify-content: center;
}
</style>
