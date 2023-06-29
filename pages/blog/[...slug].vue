<template>
    <main class="container border-0">
        <Menu :short="true" />
        <div class="content nuxt-content mt-[4rem]">
            <ContentDoc v-slot="{ doc }">
                <img
                    class="thumbnail border-2 border-primary rounded-lg mt-0"
                    :src="doc.img"
                    :alt="doc.title"
                />
                <h1>{{ doc.title }}</h1>
                <div class="info">
                    <p class="mr-6">{{ formatDate(doc.date) }}</p>
                    <img
                        class="w-4 h-4 mr-2"
                        src="/icons/utils/book.svg"
                        alt="Read time"
                    />
                    <p>{{ doc.readtime }} min</p>
                </div>
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </div>
        <Footer />
    </main>
</template>

<script setup lang="ts">
const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
</script>

<style>
.nuxt-content h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: bolder;
}

.nuxt-content .info {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}

.nuxt-content .info p {
    font-size: 0.8rem;
    color: #a0a0a0;
    margin-bottom: 0;
}

.nuxt-content h2 {
    text-transform: none;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: inherit;
}

.nuxt-content h3 {
    text-transform: none;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
}

.nuxt-content h4 {
    text-transform: none;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: left;
}

.nuxt-content img:not(.info img, .thumbnail) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
}

.nuxt-content ol {
    margin-left: 1.5rem;
    list-style: decimal;
}

.nuxt-content ul {
    margin-left: 1.5rem;
    list-style: outside;
}

.nuxt-content pre {
    margin: 2rem 0;
    padding: 1rem;
    line-height: 1.25;
    overflow-x: scroll;
    border: 1px solid #999;
    page-break-inside: avoid;
    border-radius: 0.5rem;
}

.nuxt-content pre,
.nuxt-content code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
    color: #fefefe;
    background-color: #464c57;
}

.nuxt-content blockquote {
    border-left: 0.1rem solid #999;
    page-break-inside: avoid;
    padding-left: 1rem;
    margin-left: 1rem;
}

.nuxt-content p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.77778rem;
}

.nuxt-content a:not(h2 a, h3 a, h4 a, .nuxt-content .socials a) {
    color: #fefefe;
    text-decoration: none;
    border-bottom: 0.1rem solid #fefefe;
}

.nuxt-content ol li {
    font-size: 1.125rem;
    line-height: 1.77778rem;
    margin-bottom: 2rem;
}

.nuxt-content ul li {
    font-size: 1.125rem;
    line-height: 1.77778rem;
    margin-bottom: 2rem;
}
</style>
