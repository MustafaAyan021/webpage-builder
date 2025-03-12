<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
defineProps({
    label: String,
    rows: String,
    cols: String,
    classes: String,
    maxlength: String,
    modelValue: String,
})
</script>

<template>
    <div class="flex flex-col">
        <label for="text-area" :class="`${currentTheme.text} ml-2 font-semibold text-sm mb-1`">{{ label }}</label>
        <textarea id="textarea" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :maxlength="maxlength"
            :rows="rows" :cols="cols"
            :class="`${classes} text-gray-600 rounded-br-0 border ${currentTheme.borderColor} focus:outline-0 bg-transparent text-lg rounded-lg w-full p-2.5`"
            required></textarea>
    </div>
</template>