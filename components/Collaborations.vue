<template>
    <div class="container">
        <div class="anchor" id="collaborations"></div>
        <div class="content">
            <h3>Collaborations</h3>
            <div
                class="flex flex-wrap flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start mt-3"
            >
                <div
                    v-for="collaboration in collaborations
                        .slice(0, limite)
                        // @ts-ignore
                        .sort((a:any, b:any) => new Date(b.date) - new Date(a.date))"
                    :key="collaboration.href"
                >
                    <CollaborationCard
                        :img="collaboration.img"
                        :title="collaboration.title"
                        :description="collaboration.description"
                        :date="collaboration.date"
                        :href="collaboration.href"
                    />
                </div>
            </div>
            <div class="flex justify-center lg:justify-end mt-9">
                <div class="overflow-hidden rounded-lg w-fit">
                    <button
                        class="p-3 border border-secondary"
                        :class="[
                            limite >= maxLimit ? 'unavailable' : 'bg-primary',
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
                        :class="[limite <= 2 ? 'unavailable' : 'bg-primary']"
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
const collaborations = [
    {
        img: 'https://nexten.imgix.net/8be2db4e-fa23-4616-811a-37477926c7ef.jpg?auto=format&fit=crop&w=1920&h=630&crop=edges&s=09c8cbba174ddbb6bc8407627db97697',
        title: 'Improve your art of Googling',
        description:
            "As a developer, you often come across a problem that is outside your knowledge, and that's fine. As a developer",
        href: 'https://nexten.io/en/blog/maitriser-google-les-principaux-raccourcis',
        date: '2023-03-22',
    },
    {
        img: 'https://nexten.imgix.net/46d3399b-5c2a-4203-ab10-dd25b7b7e115.png?auto=format&fit=crop&w=1920&h=630&crop=edges&s=32ab4ffb174f2cd0f7096207405047f8',
        title: 'Tutorial hell and how to get out',
        description:
            'Every beginner who wants to get into development must start somewhere. Although every beginner has',
        href: 'https://nexten.io/en/blog/dev-echapper-a-l-enfer-des-tutos',
        date: '2022-12-07',
    },
    {
        img: 'https://25146371.fs1.hubspotusercontent-eu1.net/hub/25146371/hubfs/Purple%20monkey-2-3.png?width=600&name=Purple%20monkey-2-3.png',
        title: 'Do you need a portfolio website?',
        description:
            'Developer portfolios are very popular. Just casually scrolling through Twitter, I often come across tweets',
        href: 'https://community.nexten.io/dev-ai-je-vraiment-besoin-dun-portfolio',
        date: '2022-10-20',
    },
];

const props = defineProps({
    scroll: {
        type: Function,
        required: true,
    },
});

const limite = useState<number>('limite', () => 2);
const maxLimit = collaborations.length;

async function incrementLimit() {
    if (limite.value >= maxLimit) return;
    limite.value += 2;
}

function decrementLimit() {
    if (limite.value <= 2) return;
    props.scroll('collaborations');
    setTimeout(() => {
        limite.value = 2;
    }, limite.value * 80);
}
</script>
