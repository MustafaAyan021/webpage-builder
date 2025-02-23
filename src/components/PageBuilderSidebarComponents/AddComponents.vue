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
import { IconPlus } from '@tabler/icons-vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { v4 as uuidv4 } from 'uuid';
const { currentTheme } = storeToRefs(useThemeStore())
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())
const contentStore = usePageBuilderContent()
const { mainContent } = storeToRefs(contentStore)
const { selectedComponent } = storeToRefs(contentStore)
const content = [
    {
        id:Number,
        name: 'Header',
        mainComponent: Header,
        logoSrc:String,
        border:false,
    },
    {
        id:Number,
        name: 'Heading',
        mainComponent: Heading,
        heading:'Heading Here...',
        border:false,
    },
    {
        id:Number,
        name: 'Sub Heading',
        mainComponent: SubHeading,
        subHeading:'This is a sub heading place holder',
        border:false,
    },
    {
        id:Number,
        name: 'Image',
        mainComponent: Image,
        ImageSrc:'https://png.pngtree.com/illustration/20190226/ourmid/pngtree-illustration-landscape-city-building-city-png_4279.jpg',
        border:false,
    },
    {
        id:Number,
        name: 'Cards',
        mainComponent: CardsContainer,
        cardHeading:String,
        border:false,
    },
    {
        id:Number,
        name: 'Footer',
        mainComponent: Footer,
        footerText:String,
        border:false,
    },
]
</script>

<template>
    <div v-show="sidebarContent.showAddItem">
        <h1 :class="`font-semibold text-xl mb-6 ${currentTheme.text}`">Add Component</h1>
        <div v-for="(e, index) in content" class="flex flex-col">
            <Button variant="outline" @click="mainContent.splice(index, 0, {...e, id:uuidv4()})" classes="py-1 mt-1">
                <div class=" w-full flex justify-between items-center">
                    <p class="text-sm font-normal">{{ e.name }}</p>
                    <i class="bg-gray-50 w-max h-max aspect-square rounded-full p-1">
                        <IconPlus class="text-black" size="20" stroke="2" />
                    </i>
                </div>
            </Button>
        </div>
    </div>
</template>