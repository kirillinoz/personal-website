<template>
    <main>
        <Hero />
        <Offer />
        <Testimonials />
        <Blog />
        <Collaborations />
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'Home',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Home page',
        },
    ],
})
</script>
