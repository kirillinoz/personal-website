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
import collaborations from '~~/assets/collaborations';

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
