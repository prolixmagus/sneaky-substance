<script setup>
  import { RouterLink, RouterView, useRoute } from 'vue-router';
  import { userInterfaceStore } from '@/stores/interface';

  const uiState = userInterfaceStore();
  const route = useRoute();
</script>
<template>
  <header :class="`${route.name} ${uiState.menuClass}`">
    <div class="wrapper">
      <nav class="site-menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/monsters">Monsters</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      {{ uiState.mainMenuOpen }}
      {{ uiState.menuClass }}

      <button @click="uiState.toggleMenu()">Toggle</button>
    </div>
  </header>

  <main class="outlet">
    <RouterView />
  </main>

  <footer>I am a footer</footer>
</template>

<style scoped>
  .router-link-active {
    border-bottom: 3px solid yellow;
  }

  .site-menu {
    display: flex;
    gap: var(--space);

    a {
      padding: 1em;
    }
  }
</style>
