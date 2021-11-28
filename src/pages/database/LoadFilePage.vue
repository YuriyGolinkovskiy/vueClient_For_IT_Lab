<template>
    <v-container>
        <form @submit.prevent="loadFiles">
            <v-file-input
                v-model="files"
                chips
                counter
                multiple
                show-size
                truncate-length="40"
            ></v-file-input>

            <v-btn type="submit">
                Загрузить файлы
            </v-btn>
        </form>
    </v-container>
</template>

<script>
import item from '../../actions/item.js';

export default {
    components: {},
    data: () => ({
        files: [],
    }),
    methods: {
        loadFiles() {
            item.uploadFiles(this.files);
            this.files = [];
        },
    },
    created() {},
};
</script>

<style scoped>
.v-btn {
    display: block;
    margin: 0 auto;
}
</style>
