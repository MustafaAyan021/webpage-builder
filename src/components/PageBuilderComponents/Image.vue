<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
</script>

<template>
        <div id="heading" @click="sidebarStore.openImageEditingFunc();"
        :class="`group w-full h-[450px] flex flex-col justify-center items-center relative p-1 rounded-md cursor-pointer text-center ${sidebarContent.openImageEditing ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <img src="https://png.pngtree.com/illustration/20190226/ourmid/pngtree-illustration-landscape-city-building-city-png_4279.jpg"
            alt="" class="object-center object-cover w-full h-full rounded-md">
        <p
            :class="` ${sidebarContent.openImageEditing ? 'visible' : 'invisible'} group-hover:visible text-[12px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Image</p>
    </div>
</template>