<script setup>
import Button from '@/components/button/Button.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
let props = defineProps({
    border:{
        type:Boolean,
        default:false,
    }
})
</script>
<template>
    <div id="heading" @click="sidebarStore.openFooterEditingFunc()"
        :class="`group flex flex-col relative p-0.5 rounded-md w-full cursor-pointer text-center mt-5 ${props.border ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <div class="text-center p-3 w-full text-black mt-2 border rounded-lg border-gray-300">
            © 2025 Copyright: vue-assigment
        </div>
        <p
            :class="` ${props.border ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Footer</p>
    </div>
</template>