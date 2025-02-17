<script setup>
import { defineProps, ref } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const props = defineProps({
    label: String,
    type: String,
    classes: String,
    accept: String,
    fileName: String,
    atChange: Function,
    value: String,
})
const InputTypeFileBorder = ref(`file:${currentTheme.value.borderColor}`);
</script>

<template>
    <div class="flex flex-col">
        <label for="input" :class="`${currentTheme.text} ml-2 font-semibold text-sm mb-1`">{{ props.label }}</label>
        <input id="input" @change="props.atChange" :type="props.type" :value="props.value"
            @input="$emit('update:modelValue', $event.target.value)" :accept="props.accept"
            :class="`text-gray-600 border ${currentTheme.borderColor} ${props.fileName ? 'rounded-b-none' : ''} file:border-gray-300 ${InputTypeFileBorder} focus:outline-0 bg-transparent text-sm rounded-lg w-full p-2.5  file:mr-3 file:p-0.5 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-600 hover:file:cursor-pointer file:rounded-md hover:file:bg-blue-50 hover:file:text-blue-700 file:w-[100%] ${props.classes}`"
            required />     
    </div>
    <div v-if="props.type == 'file' && props.fileName"
        :class="`px-3 py-1 border ${currentTheme.borderColor} text-left border-t-0 w-full rounded-md rounded-t-none`">
        <p :class="`text-sm font-semibold ${currentTheme.text} text-nowrap inline`">Selected Image : </p>
        <span :class="`text-sm ${currentTheme.text} font-mono text-wrap break-words`"> {{ props.fileName }} </span>
    </div>
</template>