<script setup>
import NavBar from './components/NavBar.vue';
import RickMortyCards from './views/RickMortyCards.vue';
</script>

<template>
  <NavBar />

  <Suspense>
    <template #default>
      <RickMortyCards />
    </template>
    <template #fallback>
      <NSpace class="spinner">
        <n-spin size="large" stroke="green" />
      </NSpace>
    </template>
  </Suspense>
</template>

<style scoped>
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
