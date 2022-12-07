<template>
    <div class="bg-black">

        <Head>
            <Title>MMA - About</Title>
            <Meta name="description" content="MMA - Lorem ipsum dolor sit" />
        </Head>

        <Nav />

        <section class="container mx-auto py-16">
            <div class="content">
                <p class="text-6xl text-center text-white">
                    We bridge the gap between design and technology
                </p>
            </div>
        </section>

        <section id="ethics" class="container mx-auto py-16">
            <div>
                <div class="container pb-8">
                    <p class="text-4xl text-center text-white pb-8">Keeping it 100</p>
                    <p class="text-md text-gray">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands, looking to make a net-positive impact in the world.</p>
                </div>
                <div class="container">
                <p class="text-md text-gray">Our approach to building software
                    prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
                    build, test, and iterate on them using real-world analytics and actionable KPIs. The emphasis on
                    data-driven design, diversity, user empathy, and sustainability aren't buzzwords, they're why we
                    win.</p>
                </div>
            </div>
        </section>

        <Client />

        <Result />

        <Contact />

        <Footer />

    </div>
</template>


<script lang="ts">
    import { useCssModule } from 'vue'

    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()
        }
    }
</script>


<style module scoped>
    @import '~/assets/css/tailwind.css';
</style>