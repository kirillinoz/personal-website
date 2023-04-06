<template>
    <div class="container">
        <div class="content">
            <h3>What I offer</h3>
            <div class="flex justify-between mt-12">
                <Card
                    icon="website"
                    title="Amazing Website"
                    description="I will design and build a website that..."
                    :goals="[
                        'Represents your business and your products.',
                        'Captures the attention of your potential clients.',
                    ]"
                />
                <Card
                    icon="ink"
                    title="Technical Writing"
                    description="I will write an article for you that..."
                    :goals="[
                        'Is original and high quality.',
                        'Revolves around web dev and tech.',
                    ]"
                />
            </div>
        </div>
    </div>
</template>
