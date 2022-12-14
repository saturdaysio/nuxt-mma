<template>
  <div id="desktop-menu" class="bg-blue">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="flex justify-between">
        <div class="logo">
          <NuxtLink to="/" class="navbarItem">
            <h2 class="text-white"><strong>MMA</strong></h2>
          </NuxtLink>

          <a role="button" class="navbarBurger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
            @click="toggleAction">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="nav-links" class="flex justify-end">
          <div class="navbarItem pr-8">
            <NuxtLink to="/" active-class="active">
              <strong class="text-white">Event</strong>
            </NuxtLink>
          </div>
          <div class="navbarItem">
            <NuxtLink to="/about" active-class="active">
              <strong class="text-white">About</strong>
            </NuxtLink>
          </div>
        </div>


      </div>
    </nav>
  </div>

  <div v-show="toggle" id="menuOverlay" class="overlay">
    <nav class="navbar">
      <div class="navbarBrand">
        <NuxtLink to="/" class="navbarItem">
          <h2><strong>MMA</strong></h2>
        </NuxtLink>

        <a role="button" class="navbarBurger isActive" aria-label="menu" aria-expanded="true" data-target="navbarBasic"
          @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <div class="navbarItem">
              <NuxtLink to="/" active-class="active">
                <h2 class="text-white">Event</h2>
              </NuxtLink>
            </div>

            <div class="navbarItem">
              <NuxtLink to="/about" active-class="active">
                <h2 class="text-white">About</h2>
              </NuxtLink>
            </div>

            <div class="navbarItem">
              <NuxtLink to="/tos" active-class="active">
                <h2 class="text-white">Terms of Service
                </h2>
              </NuxtLink>
            </div>

            <div class="navbarItem">
              <NuxtLink to="/privacy" active-class="active">
                <h2 class="text-white">Privacy Policy</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">

export default {
  data: function () {
    return {
      toggle: false,
    };
  },

  methods: {
    toggleAction: function () {
      this.toggle = !this.toggle;
      if (this.toggle) {
        document.body.classList.add("disableScroll");
      } else {
        document.body.classList.remove("disableScroll");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/tailwind.css';

.navbar {
  height: 4rem;
  padding: 1rem 1rem;
}

/* Overlay Menu */
.overlay {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow-y: hidden;
  opacity: 0.96;
  z-index: 100;
}
</style>