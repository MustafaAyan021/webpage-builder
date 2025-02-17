<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';
import draggableComponent from 'vuedraggable';
import { reactive } from 'vue'
import CardsContainer from "@/components/PageBuilderComponents/CardsContainer.vue";
import Footer from "@/components/PageBuilderComponents/Footer.vue";
import Header from "@/components/PageBuilderComponents/Header.vue";
import Heading from "@/components/PageBuilderComponents/Heading.vue";
import Image from "@/components/PageBuilderComponents/Image.vue";
import SubHeading from "@/components/PageBuilderComponents/SubHeading.vue";
import CardSettings from "@/components/PageBuilderSidebarComponents/CardSettings.vue";
import FooterSettings from "@/components/PageBuilderSidebarComponents/FooterSettings.vue";
import HeaderSettings from "@/components/PageBuilderSidebarComponents/HeaderSettings.vue";
import HeadingSettings from "@/components/PageBuilderSidebarComponents/HeadingSettings.vue";
import ImageSettings from "@/components/PageBuilderSidebarComponents/ImageSettings.vue";
import SubHeadingSettings from "@/components/PageBuilderSidebarComponents/SubHeadingSettings.vue";

const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())
const contentStore = usePageBuilderContent()
const { mainContent } = storeToRefs(contentStore)
const content = [
        {
            name:'Header',
            mainComponent:Header,
            settingsComponent:HeaderSettings,
        },
        {
            name:'Heading',
            mainComponent:Heading,
            settingsComponent:HeadingSettings,
        },
        {
            name:'Sub Heading',
            mainComponent:SubHeading,
            settingsComponent:SubHeadingSettings,
        },
        {
            name:'Image',
            mainComponent:Image,
            settingsComponent:ImageSettings,
        },
        {
            name:'Cards',
            mainComponent:CardsContainer,
            settingsComponent:CardSettings,
        },
        {
            name:'Footer',
            mainComponent:Footer,
            settingsComponent:FooterSettings,
        },
       ]
</script>

<template>
    <div v-show="sidebarContent.showAddItem">
       <div v-for="(e, index) in content" class="flex flex-col">
        <Button variant="outline" @click="mainContent.splice(index , 0 , e)" classes="py-1 mt-1">
           {{ e.name }}
        </Button>
       </div>
    </div>
</template>