<template>
    <section id="stats" :class="[$style.container, $style.mxAuto, $style.py16]">
        <div :class="$style.columns">
            <div :class="$style.column">
                <div :class="$style.box">
                    <div :class="$style.pb8">
                        <p :class="[$style.text4xl, $style.textCenter, $style.textWhite]">
                            Our stats
                        </p>
                    </div>
                    <div :class="[$style.flex, $style.flexWrap]">
                        <div :class="$style.pb4" v-for="item in resultStore.resultJson.result" :key="item.id">
                            <p :class="[$style.text4xl, $style.textWhite]">{{ item.title }}</p>
                            <p :class="[$style.textMd, $style.textWhite]">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { useCssModule } from 'vue'
    import { useResultStore } from "~~/store/result";


    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()

            const resultStore = useResultStore()

            return { resultStore }
        }
    }
</script>

<style module scoped>
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