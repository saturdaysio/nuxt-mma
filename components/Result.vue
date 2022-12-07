<template>
    <section id="stats" class="container mx-auto py-16">
        <div class="">
            <div class="flex flex-col">
                <div class="pb-8">
                    <p class="text-4xl  text-center text-white">
                        Our stats
                    </p>
                </div>
                <div class="flex flex-wrap">
                    <div class="resultCard">
                        <div class="pb-4" v-for="item in resultStore.resultJson.result" :key="item.id">
                            <p class="text-4xl text-white">{{ item.title }}</p>
                            <p class="text-md text-orange">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useResultStore } from "~~/store/result";


export default {
    setup() {
        const resultStore = useResultStore()

        return { resultStore }
    }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';

.resultCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    flex-shrink: 0;
    padding: 0 2rem;
}

@media only screen and (max-width: 800px) {
    .resultCard {
        width: 100%;
        padding: 0 1rem;
    }
}
</style>