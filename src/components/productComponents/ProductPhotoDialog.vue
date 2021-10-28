<template>
    <v-dialog
        v-model="$store.getters.getDialogVisible"
        max-width="600"
        @click:outside="this.hideDialog"
    >
        <v-card>
            <v-img :src="$store.getters.getCurrentPhoto.url" />
        </v-card>
    </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(['hideDialog']),
    },
    computed: {
        fullTitle() {
            return `Название - ${this.$store.getters.getCurrentPhoto.name}`;
        },
    },
};
</script>

<style></style>
