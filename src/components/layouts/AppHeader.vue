<script setup lang="ts">
import { usePageTitle } from '@/composables/ui/usePageTitle'
import { sections } from '@/constants/sections'
import { scrollTo } from '@/helpers/scrollTo'

usePageTitle()
</script>

<template>
  <header class="sticky top-0 bg-zinc-800">
    <div class="container max-w-full mx-auto px-4 py-4 flex items-center justify-between">
      <nav class="w-full flex justify-center gap-6">
        <button v-for="section in sections" :key="section.id" @click="scrollTo(section.id)">
          {{ section.label }}
        </button>
      </nav>

      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition">
        <!-- Icon -->
        <!-- <span v-if="!isDark">☀️</span> -->
        <span>🌙</span>
      </button>

    </div>
  </header>
</template>