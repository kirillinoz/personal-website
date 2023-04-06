<template>
    <div class="card px-6 py-12 max-w-md w-full flex items-center flex-col">
        <img
            class="w-56 h-56 text-gray-400"
            :src="`/icons/${icon}.svg`"
            alt="Website Icon"
        />
        <div class="mt-12 w-full border-t-2 border-primary">
            <h4 class="font-black mt-6">{{ title }}</h4>
            <p class="mt-3">{{ description }}</p>
            <ul class="mt-6">
                <li v-for="goal in goals" :key="goal" class="mt-3 font-bold">
                    {{ goal }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
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
        goals: {
            type: Array,
            required: true,
        },
    },
}
</script>
