<template>
    <nav
        class="w-full min-h-[4rem] bg-secondary border-b-2 border-primary p-y-6 flex justify-between items-center flex-wrap fixed top-0 z-50 shadow-3xl"
    >
        <button class="logo-button flex items-center" @click="handleClick">
            <img class="h-[3rem] w-auto" src="/icons/logo.svg" alt="Logo" />
            <p class="font-bold pr-3">Kirill Inoz</p>
        </button>
        <button class="hamburger" @click="isShow = !isShow">
            <img src="/icons/menu.svg" alt="Menu" />
        </button>
        <ul
            class="h-[4rem] flex list-none items-center"
            :class="{ show: isShow, hidden: short }"
        >
            <li>
                <button
                    class="menu-item"
                    @click="
                        scroll('offers');
                        isShow = false;
                    "
                >
                    What I Offer
                </button>
            </li>
            <li>
                <button
                    class="menu-item"
                    @click="
                        scroll('testimonials');
                        isShow = false;
                    "
                >
                    Testimonials
                </button>
            </li>
            <li>
                <button
                    class="menu-item"
                    @click="
                        scroll('blog');
                        isShow = false;
                    "
                >
                    Blog
                </button>
            </li>
            <li>
                <button
                    class="menu-item"
                    @click="
                        scroll('collaborations');
                        isShow = false;
                    "
                >
                    Collaborations
                </button>
            </li>
            <li>
                <button
                    class="menu-item hover:text-primary highlight rounded-none"
                    @click="mail"
                >
                    Contact me
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        scroll: Function,
        short: Boolean,
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        handleClick() {
            this.short ? this.redirectToHome() : this.scroll('hero');
        },
        redirectToHome() {
            this.$router.push('/');
        },
        mail() {
            location.href = 'mailto:ikirill2001@gmail.com';
        },
    },
};
</script>

<style scoped>
.hamburger,
.logo-button {
    width: initial;
    padding: 0;
    margin: 0;
    height: 4rem;
}
.hamburger {
    display: none;
}
@media screen and (max-width: 855px) {
    nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--primary-bg-color);
    }
    nav ul > * {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: var(--secondary-bg-color);
    }
    nav ul > *:last-child {
        margin-bottom: 1rem;
    }
    nav ul > * > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 100%;
        border: 0;
    }
    nav ul.show {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hamburger {
        display: block;
        width: 4rem;
        height: 4rem;
    }
    .hamburger img {
        width: 100%;
        height: 100%;
    }
}
</style>
