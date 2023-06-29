<template>
    <main>
        <Menu :scroll="scroll" />
        <Hero />
        <Offer />
        <Testimonials />
        <Blog :scroll="scroll" />
        <Collaborations :scroll="scroll" />
        <Footer />
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'Kirill Inoz • Web Developer & Technical Writer',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Home page',
        },
    ],
});

function scroll(id: string) {
    // @ts-ignore
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
    });
}
</script>
