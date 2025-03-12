<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
import Paragraph from './Paragraph.vue';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
defineProps({
    heading:String,
    paragraph:String,
    imageSrc:String,
})
</script>

<template>
    <div name="card" class="w-64 flex flex-col rounded-lg bg-gray-200 text-black">
        <img :src="imageSrc"
            alt="" class="object-cover rounded-t-lg w-full aspect-square">
        <div class="px-6 py-3 text-left">
            <h1>{{ heading }}</h1>
            <p class="text-sm text-wrap break-word text-gray-600">{{ paragraph }}</p>
        </div>
    </div>
</template>