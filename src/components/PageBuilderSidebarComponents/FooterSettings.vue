<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { ref } from 'vue';

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())


</script>

<template>
    <div v-show="sidebarContent.openFooterEditing" id="heading-editing">
        <Input type="text" label="Copyright Author" />
    </div>
</template>