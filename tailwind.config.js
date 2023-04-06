/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#d2d2d2',
                secondary: '#272f37',
                card: '#4a505b',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
