<template>
    <section id="skills" class="container mx-auto py-16">
        <div class="">
            <div class="">
                <div class="">
                    <div class="text-center pb-8">
                        <p class="text-4xl text-white">
                            Main Card
                        </p>
                    </div>
                    <div class="flex flex-row flex-wrap">
                        <div id="athlete" class="fighter-card" v-for="item in athleteStore.fighterJson.athlete" :key="item.id">
                            <div class="pr-4">
                                <img class="avatar w-24" :src="item.imgSrc" :alt="item.imgAlt" :width="item.imgWidth"
                                    :height="item.imgHeight">
                            </div>
                            <div class="flex flex-col">
                                <p class="text-2xl text-white">{{ item.name }}</p>
                            <p class="text-xl text-gray">{{ item.win }}-{{ item.loss }}-{{ item.draw }}</p>
                            <p class="text-md text-gray">{{ item.country }}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { useFighterStore } from "~~/store/fighter";

export default {
    setup() {
        const athleteStore = useFighterStore()

        return { athleteStore }
    }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';

.avatar {
    border-radius: 3rem;
}

.fighter-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    flex-shrink: 0;
    padding-bottom: 4rem;
}
</style>