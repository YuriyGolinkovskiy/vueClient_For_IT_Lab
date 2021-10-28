<template>
    <v-container>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="send">
                <validation-provider
                    v-slot="{ errors }"
                    rules="required|max:20"
                >
                    <v-text-field
                        name="name"
                        v-model="name"
                        :counter="20"
                        :error-messages="errors"
                        label="Ваше имя"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    :rules="{
                        required: true,
                        regex:
                            '(\\+)?(\\(\\d{2,3}\\) ?\\d|\\d)(([ \\-]?\\d)|( ?\\(\\d{2,3}\\) ?)){5,12}\\d$',
                    }"
                >
                    <v-text-field
                        name="phoneNumber"
                        v-model="phoneNumber"
                        :error-messages="errors"
                        label="Ваш номер телефона"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required|email">
                    <v-text-field
                        name="email"
                        v-model="email"
                        :error-messages="errors"
                        label="Ваш E-mail"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                    <v-textarea
                        name="message"
                        autocomplete="message"
                        v-model="message"
                        :counter="500"
                        :error-messages="errors"
                        label="Ваше сообщение"
                        required
                    ></v-textarea>
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
import emailjs from 'emailjs-com';
import item from '../../actions/item.js';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
    }),

    methods: {
        send(e) {
            this.submit();
            item.sendMail(
                this.email,
                this.name,
                this.phoneNumber,
                this.message
            ).then((res) => {
                alert('Письмо отправлено. Ожидайте ответа');
            });
            // try {
            //     emailjs.sendForm(
            //         'service_rs558z4',
            //         'template_wxnymxj',
            //         e.target,
            //         'user_hQtnN6WQ3lPhssV1YKqHc',
            //         {
            //             name: this.name,
            //             email: this.email,
            //             message: this.message,
            //             phoneNumber: this.phoneNumber,
            //         }
            //     );
            // } catch (error) {
            //     console.log({ error });
            // }
            this.clear();
        },
        submit() {
            this.$refs.observer.validate();
        },
        clear() {
            this.name = '';
            this.phoneNumber = '';
            this.email = '';
            this.message = '';
            this.$refs.observer.reset();
        },
    },
};
</script>

<style scoped>
.v-btn.on-hover {
    background: #ef9a9a;
    color: white;
}
</style>
