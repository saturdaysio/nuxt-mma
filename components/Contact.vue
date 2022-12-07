<template>
    <section id="cta" class="container mx-auto py-16">
        <div class="">
            <div class="mb-8">
                <p class="text-4xl text-center text-white">Have an interesting project?</p>
            </div>
            <div class="flex justify-center">
                <div class="">
                    <NuxtLink to="mailto:info@saturdays.io">
                        <button class="button is-link">
                            <p class="text-lg uppercase"><strong>Let's talk</strong></p>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import '~/assets/css/tailwind.css';

.button.is-link {
    color: #fff;
    background: none;
    border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 1.5rem;

    &:hover {
        background: none;
    }
}
</style>