<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { ref } from 'vue';
import Textarea from '../input/textarea.vue';

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())


</script>

<template>
    <div id="paragrahh-editing" v-show="sidebarContent.openParagraphEditing">
        <Textarea label="Paragraph" classes="h-48" />
    </div>
</template>