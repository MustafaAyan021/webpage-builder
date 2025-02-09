<script setup>
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { storeToRefs } from 'pinia';
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
</script>

<template>
    <div id="heading" @click="sidebarStore.openParagraphEditingFunc();"
        :class="`w-full group flex flex-col relative p-1 rounded-md cursor-pointer my-3 ${sidebarContent.openParagraphEditing ? 'border border-pink-600' : 'border border-transparent hover:border-pink-600'}`">
        <p :class="` text-wrap text-gray-700 text-md`">Illum atque, ullamco ullam wisi doloremque officia alias distinctio atque, leo malesuada ac, mattis ipsam tempus deleniti habitant, pede euismod? Cursus reiciendis illo perferendis reprehenderit eu, gravida, quos magni veniam itaque ultricies placeat hac taciti, consectetur fringilla aliquip, blanditiis, lorem, totam primis, feugiat nullam! Distinctio, feugiat maiores esse magna quae? Laudantium condimentum? Quae vel sit commodi, in. Odit harum nesciunt, ducimus erat saepe repellat? Cumque quam elementum voluptas risus quis provident metus. Facilis fringilla dignissim eiusmod voluptates? Nulla dui hac voluptates condimentum pretium reiciendis impedit diam, dui pulvinar...</p>
        <p
            :class="` ${sidebarContent.openParagraphEditing ? 'visible' : 'invisible'} group-hover:visible text-[11px] px-0.5 rounded-br-sm rounded-t-[3px] text-white bg-pink-600 absolute -top-2 -left-[2px]`">
            Paragraph</p>
    </div>
</template>