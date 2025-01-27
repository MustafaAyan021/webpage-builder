<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const {currentTheme} = storeToRefs(themeStore);

defineProps({
    classes: '',
})
</script>

<template>
    <main
        :class="`${currentTheme.backgroundSecondary} text-white h-full p-3 px-6 flex flex-wrap gap-4 overflow-auto transition-all duration-300 ease-out ${classes}`">
        <slot>Content</slot>
    </main>
</template>