<script setup lang="ts">
import { usePageTitle } from '@/composables/ui/usePageTitle'

usePageTitle()

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="sticky top-0">
    <div class="container max-w-full mx-auto px-4 py-4 flex items-center justify-between">
      <nav class="w-full flex justify-center gap-6">
        <button @click="scrollTo('home')">Home</button>
        <button @click="scrollTo('about')">About</button>
        <button @click="scrollTo('projects')">Projects</button>
      </nav>

      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition">
        <!-- Icon -->
        <!-- <span v-if="!isDark">☀️</span> -->
        <span>🌙</span>
      </button>

    </div>
  </header>
</template>