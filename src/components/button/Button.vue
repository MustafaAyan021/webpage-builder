<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const props = defineProps({
    type:'',
})
</script>

<template>
     <button :type="props.type" :class="`${currentTheme.button} ${currentTheme.text} p-2 rounded-lg font-semibold`">
        <slot>Button Text</slot>
     </button>
</template>