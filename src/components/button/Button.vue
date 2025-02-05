<script setup>
import { defineProps, computed, reactive } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const props = defineProps({
    type: String,
    variant: String,
    appendIcon:Function,
    prependIcon:Function,
    iconSize:{
        type:String,
        default:'size-5',
    },
    classes:String,
});
const variants = {
    solid: `${currentTheme.value.button} ${currentTheme.value.text} p-2 rounded-lg font-semibold`,
    outline: `${currentTheme.value.text} border ${currentTheme.value.borderColor} p-2 rounded-lg font-semibold`,
    warning: `bg-yellow-400 border border-black text-black p-2 rounded-lg font-semibold`,
    danger: `bg-red-600 border border-black text-white p-2 rounded-lg font-semibold`,
};     

const buttonClass = computed(() => variants[props.variant] || variants.solid)
</script>

<template>
    <button :type="props.type" :class="`${buttonClass} ${classes}`">
        <div class="flex items-center justify-center">
            <component :is="prependIcon" v-if="appendIcon" :class="props.iconSize"/><slot></slot><component :is="appendIcon" v-if="appendIcon" :class="props.iconSize"/>
        </div>
    </button>
</template>
