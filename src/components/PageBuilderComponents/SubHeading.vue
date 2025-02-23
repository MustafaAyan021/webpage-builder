<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
defineProps({
    border:{
        type:Boolean,
        default:false,
    },
    subHeading:{
        type:String,
        default:'This is a placeholder for a sub heading...',
    }
})
</script>

<template>
    <div id="heading" @click="sidebarStore.openSubHeadingEditingFunc();"
        :class="`group flex flex-col relative p-0.5 rounded-md w-full cursor-pointer text-center m-0.5 ${border ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <h1 :class="` text-wrap break-word text-gray-600 text-sm`">{{ subHeading }}</h1>
        <p
            :class="` ${border ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Sub Heading</p>
    </div>
</template>