<template>
    <div class="container">
        <div class="anchor" id="offers"></div>
        <div class="content">
            <h3>What I offer</h3>
            <div
                class="flex flex-wrap flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start mt-3"
            >
                <Card
                    icon="website"
                    title="Amazing Website"
                    description="I will design and build a website that..."
                    :goals="[
                        'Represents your business and your products.',
                        'Captures the attention of your potential clients.',
                    ]"
                    class="mt-9"
                />
                <Card
                    icon="ink"
                    title="Technical Writing"
                    description="I will write an article for you that..."
                    :goals="[
                        'Is original and high quality.',
                        'Revolves around web dev and tech.',
                    ]"
                    class="mt-9"
                />
            </div>
        </div>
    </div>
</template>
