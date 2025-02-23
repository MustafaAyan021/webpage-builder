<script setup>
import { storeToRefs } from 'pinia';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { computed } from 'vue';

const sidebarStore = usePageBuilderSidebarStore();
const { sidebarContent } = storeToRefs(sidebarStore);

const heading = computed({
    get: () => sidebarContent.value.selectedComponent?.heading || '',
    set: (newValue) => {
        if (sidebarContent.value.selectedComponent) {
            sidebarContent.value.selectedComponent.heading = newValue;
        }
    }
});
</script>

<template>
    <div v-show="sidebarContent.openHeadingEditing">
        <Input v-model="heading" type="text" label="Heading" />
    </div>
</template>
