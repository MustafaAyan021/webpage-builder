<script setup>
import { defineProps } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const props = defineProps({
    label:'',
    type:'',
    classes:'',
    accept:'',
})
</script>

<template>
    <div class="flex flex-col">
        <label for="input" :class="`${currentTheme.text} ml-2 font-semibold text-sm mb-1`">{{ props.label }}</label>
        <input id="input" :type="props.type" @input="$emit('update:modelValue', $event.target.value)" :accept="props.accept" :class="`${classes} ${currentTheme.text} border border-slate-300 bg-transparent text-sm rounded-lg w-full p-2.5`" required>
    </div>
</template> 