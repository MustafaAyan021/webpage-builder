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
const InputTypeFileBorder = 'file:' + currentTheme.value.borderColor
</script>

<template>
    <div class="flex flex-col">
        <label for="input" :class="`${currentTheme.text} ml-2 font-semibold text-sm mb-1`">{{ props.label }}</label>
         <input id="input" :type="props.type" @input="$emit('update:modelValue', $event.target.value)" :accept="props.accept" :class="`${classes} text-gray-600 border ${currentTheme.borderColor} focus:outline-0 bg-transparent text-sm rounded-lg w-full p-2.5  file:mr-5 file:py-1 file:px-3 file:text-xs file:font-medium file:bg-gray-50 file:text-gray-600 hover:file:cursor-pointer file:rounded-md hover:file:bg-blue-50 hover:file:text-blue-700 file:border file:w-[100%] ${InputTypeFileBorder}`" required />
    </div>
</template> 