<template>
    <a :href="href" target="_blank">
        <div class="card max-w-md border-2 border-primary overflow-hidden mt-9">
            <img
                class="w-full aspect-video object-cover"
                :src="isPlaceholder ? '/images/placeholder.png' : img"
                :alt="title"
                @error="failedToLoad"
            />
            <div class="py-6 px-6">
                <h4 class="font-black">{{ title }}</h4>
                <p class="mt-3">
                    {{ description.substring(0, 120) + '...' }}
                </p>
                <p class="text-gray-400 mt-6">{{ formattedDate }}</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    data() {
        return {
            isPlaceholder: false,
        };
    },
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
        href: {
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
    methods: {
        failedToLoad() {
            this.isPlaceholder = true;
        },
    },
};
</script>
