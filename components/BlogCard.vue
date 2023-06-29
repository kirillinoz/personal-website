<template>
    <nuxt-link :to="path">
        <div class="card max-w-md border-2 border-primary overflow-hidden mt-9">
            <img class="w-full aspect-video" :src="img" :alt="title" />
            <div class="py-6 px-6">
                <h4 class="font-black">{{ title }}</h4>
                <p class="mt-3">
                    {{ description.substring(0, 120) + '...' }}
                </p>
                <div class="flex justify-between mt-6">
                    <p class="text-gray-400">{{ formattedDate }}</p>
                    <div class="flex">
                        <img
                            class="w-4 mr-2"
                            src="/icons/utils/book.svg"
                            alt="Read time"
                        />
                        <p class="text-gray-400">{{ readtime }} min</p>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        readtime: {
            type: Number,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
    computed: {
        formattedDate() {
            return new Date(this.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        },
    },
};
</script>
