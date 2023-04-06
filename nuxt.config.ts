// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Montserrat: [200, 300, 400, 500, 600, 700, 900],
                    download: true,
                    inject: true,
                },
            },
        ],
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
