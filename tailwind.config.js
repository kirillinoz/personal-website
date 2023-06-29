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
        screens: {
            lg: '945px',
        },
        extend: {
            colors: {
                primary: '#d2d2d2',
                secondary: '#272f37',
                card: '#4a505b',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.9)',
            },
        },
    },
    plugins: [],
};
