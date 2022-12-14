<template>
    <section id="clients" class="container mx-auto py-16">
        <div class="">
            <p class="text-4xl text-center text-white">We partner with brands brave
                enough to do things differently.</p>
        </div>

        <div id="grid" class="flex flex-wrap">
            <div class="logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <img class="w-36 h-36" :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import { useClientStore } from "~~/store/client";

export default {
    setup() {
        const clientStore = useClientStore()
        return { clientStore }
    }
}
</script>

<style scoped>
@import '~/assets/css/tailwind.css';

img {
    height: auto;
}

.logo {
    display: flex;
    width: 25%;
    height: auto;
    justify-content: center;
    padding: 0 2rem;
}


@media only screen and (max-width: 800px) {
    .logo {
        width: 33.33%;
    }

}

@media only screen and (max-width: 640px) {
    .logo {
        width: 50%;
        padding: 0 1rem;
    }
}
</style>