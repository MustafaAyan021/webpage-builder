<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
</script>

<template>
    <div id="heading" @click="sidebarStore.openHeadingEditingFunc();"
        :class="`group flex flex-col relative p-1 rounded-md w-max cursor-pointer ${sidebarContent.openHeadingEditing ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <h1 :class="` text-wrap break-word text-black text-3xl`">Heading Here</h1>
        <p
            :class="` ${sidebarContent.openHeadingEditing ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Heading</p>
    </div>
</template>