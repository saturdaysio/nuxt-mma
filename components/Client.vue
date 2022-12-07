<template>
    <section id="clients" class="container mx-auto py-16">
        <div class="container">
            <p class="text-4xl text-center text-white">We partner with brands brave
                enough to do things differently.</p>
        </div>

        <div id="grid" class="flex flex-row">
            <div class="logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <figure class="image">
                    <img :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
                </figure>
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

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    flex-shrink: 0;
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