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
        :class="`${currentTheme.backgroundSecondary} text-white h-full px-4 py-3 flex flex-wrap overflow-auto rounded-[24px] m-3 transition-all duration-300 ease-out ${classes}`">
        <slot>Content</slot>
    </main>
</template>