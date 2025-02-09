<script setup>
import Button from '@/components/button/Button.vue';
import DevicePhoneMobileIcon from '@heroicons/vue/24/outline/DevicePhoneMobileIcon';
import ComputerDesktopIcon from '@heroicons/vue/24/outline/ComputerDesktopIcon';
import { IconArrowsMaximize } from '@tabler/icons-vue';
import { IconX } from '@tabler/icons-vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import Heading from '@/components/PageBuilderComponents/Heading.vue'
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import Paragraph from '@/components/PageBuilderComponents/Paragraph.vue';
import SubHeading from './PageBuilderComponents/SubHeading.vue';
import Image from './PageBuilderComponents/Image.vue';
import Header from './PageBuilderComponents/Header.vue';
import CardsContainer from './PageBuilderComponents/CardsContainer.vue';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const contentStore = usePageBuilderContent()
const { mainContentWidth } = storeToRefs(contentStore)
const state = reactive({
    heading: '',
    paragraph: '',
    openMainContent: false,
})
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)


const responsiveButtons = [
    {
        icon: ComputerDesktopIcon,
        buttonFunction: () => (contentStore.setToDesktopWidth()),
    },
    {
        icon: DevicePhoneMobileIcon,
        buttonFunction: () => (contentStore.setToMobileWidth()),
    },
    {
        icon: IconArrowsMaximize,
        buttonFunction: () => {
            contentStore.setToFullScreen()
            state.openMainContent = !state.openMainContent
            sidebarStore.showStructureFunc()
        },
    }
]
const closeFullScreen = () => {
    contentStore.setToDesktopWidth()
    state.openMainContent = false
}
</script>
<template>
    <div
        :class="`flex gap-1 p-1 ${currentTheme.activeButton} z-10 rounded-[12px] shadow-inner absolute top-2 right-[22rem]`">
        <Button v-for="btn in responsiveButtons" :key="btn.icon" @click="btn.buttonFunction()" variant="solid"
            :classes="`${currentTheme.backgroundPrimary} hover:opacity-100 opacity-90 active:scale-95 text-sm rounded-md`"
            :append-icon="btn.icon"></Button>
    </div>
    <div @click="sidebarStore.showStructureFunc()" class="absolute left-0 top-0 w-full h-screen bg-transparent"></div>
    <main
        :class="`${mainContentWidth} shadow border border-gray-200 h-[100%] bg-gray-50 rounded-[16px] flex flex-col transition-all overflow-scroll overflow-x-hidden items-center`">
        <i :class="`${state.openMainContent ? 'inline-block' : 'hidden'} z-10 absolute top-0 right-0 p-4 bg-gray-300 hover:bg-red-500 rounded-full aspect-[1/1] flex items-center m-2 ${currentTheme.text} active:scale-95 active:opacity-70`"
            @click="closeFullScreen">
            <IconX stroke='3' size="24" />
        </i>
        <Header />
        <main :class="`container py-4 ${mainContentWidth == contentStore.mobileWidth ? 'px-8' : 'px-8 md:px-24'}`">
            <Heading />
            <SubHeading />
            <Image />
            <Paragraph />
            <CardsContainer />
        </main>
        <div class="text-center p-3 w-full text-black mt-2 border-t border-gray-300">
            © 20205 Copyright: vue-assigment.com
        </div>
    </main>
</template>