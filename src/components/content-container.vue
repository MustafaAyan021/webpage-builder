<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const { darkContentAreaTheme } = storeToRefs(themeStore)

defineProps({
   classes:'',
})
</script>

<template>
    <main :class="`${darkContentAreaTheme ? 'bg-[#1B1C1D] text-white' : 'bg-[#F6F6F6]'} h-full p-3 px-6 flex flex-wrap gap-4 overflow-auto transition-all ${classes}`">
        <slot>Content</slot>
    </main>
</template>