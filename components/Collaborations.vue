<template>
    <div class="container">
        <div class="content">
            <h3>Collaborations</h3>
            <div class="flex flex-wrap justify-between mt-3">
                <div
                    v-for="collaboration in collaborations.slice(0, limite)"
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
            <div class="flex justify-end mt-9">
                <div class="overflow-hidden rounded-lg w-fit" id="controls2">
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
        img: 'https://25146371.fs1.hubspotusercontent-eu1.net/hub/25146371/hubfs/Purple%20monkey-2-3.png?width=600&name=Purple%20monkey-2-3.png',
        title: 'Do you need a portfolio website?',
        description:
            'Developer portfolios are very popular. Just casually scrolling through Twitter, I often come across tweets...',
        href: 'https://community.nexten.io/dev-ai-je-vraiment-besoin-dun-portfolio',
        date: '2022-10-20',
    },
    {
        img: 'https://nexten.imgix.net/46d3399b-5c2a-4203-ab10-dd25b7b7e115.png?auto=format&fit=crop&w=1920&h=630&crop=edges&s=32ab4ffb174f2cd0f7096207405047f8',
        title: 'Tutorial hell and how to get out',
        description:
            'Every beginner who wants to get into development must start somewhere. Although every beginner has...',
        href: 'https://nexten.io/en/blog/dev-echapper-a-l-enfer-des-tutos',
        date: '2022-12-07',
    },
]

const limite = useState<number>('limite', () => 2)
const maxLimit = collaborations.length

async function incrementLimit() {
    if (limite.value >= maxLimit) return
    limite.value += 2
    scroll('controls2')
}

function decrementLimit() {
    if (limite.value <= 2) return
    limite.value -= 2
    scroll('controls2')
}

function scroll(id: string) {
    if (document === null) return
    setTimeout(() => {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
        })
    }, 100)
}
</script>
