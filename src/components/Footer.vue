<template>
    <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
                <v-btn
                    v-for="item in icons"
                    :key="item.id"
                    class="mx-4 white--text"
                    target="_blank"
                    :href="item.link"
                    icon
                >
                    <v-icon size="24px">
                        {{ item.icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci in libero maxime. Numquam, laudantium similique quas
                dolorem harum ad quidem, ratione amet officia dicta excepturi
                minima obcaecati vitae, tempore eos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                © 2020-{{ new Date().getFullYear() }} —
                <strong>Donetsk</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            { icon: 'mdi-facebook', link: 'https://www.facebook.com/' },
            { icon: 'mdi-twitter', link: 'https://twitter.com/' },
            { icon: 'mdi-linkedin', link: 'https://ru.linkedin.com/' },
            { icon: 'mdi-instagram', link: 'https://www.instagram.com/' },
        ],
    }),
};
</script>

<style scoped>
.v-footer {
    flex-shrink: 0 !important;
    display: inline;
}
</style>
