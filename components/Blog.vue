<template>
    <div class="container">
        <div class="anchor" id="blog"></div>
        <div class="content">
            <h3>Blog</h3>
            <ContentList :query="query" v-slot="{ list }">
                <div
                    class="flex flex-wrap flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start mt-3"
                >
                    <div v-for="article in list" :key="article._path">
                        <BlogCard
                            :img="article.img"
                            :title="article.title"
                            :description="article.description"
                            :date="article.date"
                            :readtime="article.readtime"
                            :path="article._path"
                        />
                    </div>
                </div>
            </ContentList>
            <div class="flex justify-center lg:justify-end mt-9">
                <div class="overflow-hidden rounded-lg w-fit">
                    <button
                        class="p-3 border border-secondary"
                        :class="[
                            limit >= maxLimit.length
                                ? 'unavailable'
                                : 'bg-primary',
                        ]"
                        @click="incrementLimit"
                    >
                        <img
                            class="w-10"
                            src="/icons/utils/down.svg"
                            alt="Show more"
                        />
                    </button>
                    <button
                        class="p-3 border border-secondary"
                        :class="[limit <= 2 ? 'unavailable' : 'bg-primary']"
                        @click="decrementLimit"
                    >
                        <img
                            class="w-10 rotate-180"
                            src="/icons/utils/down.svg"
                            alt="Show less"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const props = defineProps({
    scroll: {
        type: Function,
        required: true,
    },
});

const maxLimit = await queryContent('blog').find();
const limit = useState<number>('limit', () => 2);

const query = useState<QueryBuilderParams>('query', () => ({
    path: '/blog',
    limit: limit.value,
    sort: [{ date: -1 }],
}));

async function incrementLimit() {
    if (limit.value >= maxLimit.length) return;
    limit.value += 2;
    updateLimit();
}

function decrementLimit() {
    if (limit.value <= 2) return;
    props.scroll('blog');
    setTimeout(() => {
        limit.value = 2;
        updateLimit();
    }, limit.value * 80);
}

function updateLimit() {
    query.value.limit = limit.value;
    console.log(limit.value);
}
</script>
