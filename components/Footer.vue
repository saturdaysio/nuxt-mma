<template>
    <footer class="footer bg-purple">
        <div class="flex justify-between">
            <div class="copyright">
                    <p class="text-white">
                        &#169; 2022 MMA
                    </p>
                </div>
            <div class="flex justify-end">
                <div class="navbarItem pr-8">
                    <NuxtLink to="/tos" active-class="active">
                        <strong class="text-white">Terms</strong>
                    </NuxtLink>

                </div>
                <div class="navbarItem">
                    <NuxtLink to="/privacy" active-class="active">
                        <strong class="text-white">Privacy</strong>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
</script>

<style scoped>
    .footer {
        padding: 3rem 1rem;
    }
</style>