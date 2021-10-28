<template>
    <v-app>
        <Navbar />
        <router-view />
        <Footer />
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'My Project';
            },
        },
    },
};
</script>

<style>
.container {
    flex-grow: 1;
}

.v-application--wrap {
    background: #fafafa;
}
</style>
