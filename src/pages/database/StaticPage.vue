<template>
    <v-container>
        <v-row>
            <h1>Static Page</h1>
        </v-row>
        <v-row>
            <v-col>
                <h2>Картинки</h2>
                <v-img
                    style="margin-bottom:20px"
                    v-for="file in img"
                    :key="file"
                    :aspect-ratio="1"
                    max-width="500px"
                    max-height="250px"
                    :src="file"
                />
            </v-col>
            <v-col>
                <h2>Ссылки на все файлы</h2>
                <div v-for="file in files" :key="file" :src="file">
                    {{ file }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import item from '../../actions/item.js';

export default {
    components: {},
    data: () => ({
        files: [],
        img: [],
    }),
    methods: {
        loadFiles() {
            item.getImg().then((res) => {
                this.img = res;
            });
            item.getFiles().then((res) => {
                this.files = res;
            });
        },
    },
    created() {
        this.loadFiles();
    },
};
</script>

<style scoped>
h1 {
    margin: 0 auto;
}
h2 {
    text-align: center;
}
</style>
