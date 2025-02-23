<script setup>
import { storeToRefs } from 'pinia';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { computed } from 'vue';

const sidebarStore = usePageBuilderSidebarStore();
const { sidebarContent } = storeToRefs(sidebarStore);

const subHeading = computed({
    get: () => sidebarContent.value.selectedComponent?.subHeading || '',
    set: (newValue) => {
        if (sidebarContent.value.selectedComponent) {
            sidebarContent.value.selectedComponent.subHeading = newValue;
        }
    }
});
</script>

<template>
    <div v-show="sidebarContent.openSubHeadingEditing">
        <Input v-model="subHeading" type="text" label="Sub Heading" />
    </div>
</template>