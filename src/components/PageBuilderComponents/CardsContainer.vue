<script setup>
import { storeToRefs } from 'pinia';
import Card from './Card.vue';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { computed, watchEffect } from 'vue';

const contentStore = usePageBuilderContent()
const { mainContentWidth } = storeToRefs(contentStore)

const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
defineProps({
    border:{
        type:Boolean,
        default:false,
    },
    childrenCards:Array
})

</script>

<template>
    <div id="heading" @click="sidebarStore.openCardEditingFunc();"
        :class="`group flex flex-col relative p-0.5 rounded-md w-full cursor-pointer text-center m-0.5 ${border ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <section name="CardContainer"
            :class="`bg-gray-100 px-6 py-4 rounded-md w-full h-max grid gap-2  ${mainContentWidth == contentStore.mobileWidth ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} place-items-center`">
            <Card v-for="(card , index) in childrenCards" :key="index" :image-src="card.image" :heading="card.heading" :paragraph="card.paragraph" />
        </section>
        <p
            :class="` ${border ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Cards</p>
    </div>
</template>