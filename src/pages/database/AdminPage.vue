<template>
    <v-container class="cont">
        <v-btn outlined class="butt">
            <router-link to="/databaseCatalog">Catalog</router-link>
        </v-btn>
        <v-btn outlined class="butt">
            <router-link to="/databaseProduct">Product</router-link>
        </v-btn>
        <v-btn outlined class="butt">
            <router-link to="/loadFile">LoadFiles</router-link>
        </v-btn>
        <v-btn outlined class="butt">
            <router-link to="/databaseStatic">StaticFiles</router-link>
        </v-btn>
    </v-container>
</template>

<script>
export default {
    components: {},
    data: () => ({}),
    methods: {},
};
</script>

<style scoped>
.cont {
    padding: auto;
    justify-content: center;
}
.v-btn {
    margin-left: 10px;
}
.v-application a {
    color: black;
    text-decoration: none;
}
</style>
