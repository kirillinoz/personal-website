// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    content: {
        highlight: 'monokai',
    },
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
    app: {
        head: {
            link: [{ rel: 'icon', href: '/favicon.ico' }],
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content:
                        'Hire me to create an amazing landing page or an awesome blog for your brand. Contact me to write a blog post on any technical topic for your brand.',
                },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:type', content: 'personal website' },
                {
                    property: 'og:title',
                    content: 'Kirill Inoz • Web Developer & Technical Writer',
                },
                {
                    property: 'og:description',
                    content:
                        'Hire me to create an amazing landing page or an awesome blog for your brand. Contact me to write a blog post on any technical topic for your brand.',
                },
                {
                    property: 'og:image',
                    content: 'https://ikirill.com/images/thumbnail.png',
                },
                { property: 'og:url', content: 'https://ikirill.com' },
                {
                    property: 'og:site_name',
                    content: 'Kirill Inoz • Web Developer & Technical Writer',
                },
                { property: 'og:locale', content: 'en_US' },
                { property: 'twitter:card', content: 'summary_large_image' },
                {
                    property: 'twitter:title',
                    content: 'Kirill Inoz • Web Developer & Technical Writer',
                },
                {
                    property: 'twitter:description',
                    content:
                        'Hire me to create an amazing landing page or an awesome blog for your brand. Contact me to write a blog post on any technical topic for your brand.',
                },
                {
                    property: 'twitter:image',
                    content: 'https://ikirill.com/images/thumbnail.png',
                },
                { property: 'twitter:url', content: 'https://ikirill.com' },
                { property: 'twitter:site', content: '@kirillinoz' },
                { property: 'twitter:creator', content: '@kirillinoz' },
            ],
            title: 'Kirill Inoz • Web Developer & Technical Writer',
        },
    },
});
