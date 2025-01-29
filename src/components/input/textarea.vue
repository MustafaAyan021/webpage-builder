<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const props = defineProps({
    label:'',
    rows:'',
    cols:'',
    classes:'',
})
</script>

<template>
    <div class="flex flex-col">
        <label for="text-area" :class="`${currentTheme.text} ml-2 font-semibold text-sm mb-1`">{{ props.label }}</label>
        <textarea id="textarea" @input="$emit('update:modelValue', $event.target.value)" :rows="props.rows" :cols="props.cols" :class="`${classes} ${currentTheme.text} border border-gray-600 bg-transparent text-lg rounded-lg w-full p-2.5`" required></textarea>
    </div>
</template>