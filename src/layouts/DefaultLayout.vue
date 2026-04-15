<script setup lang="ts">
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>