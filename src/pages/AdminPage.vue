<template>
    <v-container>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:20"
                >
                    <v-text-field
                        v-model="name"
                        :counter="20"
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
                <validation-provider
                    v-slot="{ errors }"
                    name="id"
                    rules="required"
                >
                    <v-text-field
                        v-model="id"
                        :error-messages="errors"
                        label="Id"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="categoryId"
                    rules="required"
                >
                    <v-text-field
                        v-model="categoryId"
                        :error-messages="errors"
                        label="Id категории"
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
import { getDatabase, ref, set } from 'firebase/database';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
        about: '',
        categoryId: '',
        price: '',
        url: '',
        id: '',
    }),
    methods: {
        addProduct() {
            const db = getDatabase();
            set(ref(db, `/products/${this.id}`), {
                name: this.name,
                about: this.about,
                url: this.url,
                categoryId: Number(this.categoryId),
                price: this.price,
            });
        },
        submit() {
            this.$refs.observer.validate();
            this.addProduct();
        },
        clear() {
            this.name = '';
            this.about = '';
            this.categoryId = '';
            this.price = '';
            this.url = '';
            this.$refs.observer.reset();
        },
    },
};
</script>

<style></style>
