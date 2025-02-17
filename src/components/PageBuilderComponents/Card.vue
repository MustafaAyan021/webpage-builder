<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
</script>

<template>
    <div name="card" class="max-w-72 flex flex-col rounded-lg bg-gray-200 text-black">
        <img src="https://media.istockphoto.com/id/923079848/photo/online-shopping.jpg?s=612x612&w=0&k=20&c=74cW4LDlcWRKlMMs49RKg2_-9lsCetPni4fhKjW7RhQ="
            alt="" class="object-cover w-full rounded-t-lg">
        <div class="px-6 py-3 text-left">
            <h1>Heading Here</h1>
            <p class="text-sm text-wrap break-word text-gray-600">This is a placeholder text use for paragraph due
                to a development
                purpose</p>
        </div>
    </div>
</template>