<script setup>
import { defineProps, computed, reactive } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const props = defineProps({
    type: String,
    variant: String,
    classes:String,
});

const variants = reactive({
    solid: `${currentTheme.value.button} ${currentTheme.value.text} p-2 rounded-lg font-semibold`,
    outline: `${currentTheme.value.text} ${currentTheme.value.borderColor} p-2 rounded-lg font-semibold`,
    warning: `bg-yellow-400 border border-black text-black p-2 rounded-lg font-semibold`,
    danger: `bg-red-600 border border-black text-white p-2 rounded-lg font-semi     bold`,
});

const buttonClass = computed(() => variants[props.variant] || variants.solid)
</script>

<template>
    <button :type="props.type" :class="`${buttonClass} ${classes}`">
        <slot>Button</slot>
    </button>
</template>
