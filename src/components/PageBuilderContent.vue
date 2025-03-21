<script setup>
import Button from '@/components/button/Button.vue';
import DevicePhoneMobileIcon from '@heroicons/vue/24/outline/DevicePhoneMobileIcon';
import ComputerDesktopIcon from '@heroicons/vue/24/outline/ComputerDesktopIcon';
import { IconArrowLeft, IconArrowsMaximize } from '@tabler/icons-vue';
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
import Footer from './PageBuilderComponents/Footer.vue';
import CardsContainer from './PageBuilderComponents/CardsContainer.vue';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';
import draggableComponent from 'vuedraggable';
import draggable from 'vuedraggable'
import HeadingSettings from './PageBuilderSidebarComponents/HeadingSettings.vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const contentStore = usePageBuilderContent()
const { mainContentWidth } = storeToRefs(contentStore)
const { mainContent } = storeToRefs(contentStore)
const state = reactive({
    heading: '',
    paragraph: '',
    openMainContent: false,
})
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent, selectedComponent } = storeToRefs(sidebarStore)

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
const activeBorder = (element) => {
    mainContent.value.forEach(e => e.border = false);
    element.border = true;
    sidebarStore.sidebarContent.selectedComponent = element;
};

</script>
<template>
    <div
        :class="`flex gap-1 p-1 ${currentTheme.activeButton} z-[5] rounded-[12px] shadow-inner absolute top-2 right-[22rem]`">
        <Button v-for="btn in responsiveButtons" :key="btn.icon" @click="btn.buttonFunction()" variant="solid"
            :classes="`${currentTheme.backgroundPrimary} hover:opacity-100 opacity-90 active:scale-95 text-sm rounded-md`"
            :append-icon="btn.icon"></Button>
    </div>
    <div @click="sidebarStore.showStructureFunc(), mainContent.forEach(e => e.border = false)"
        class="absolute left-0 top-0 w-full h-screen bg-transparent"></div>
    <main
        :class="`${mainContentWidth} shadow border border-gray-200 h-[100%] bg-gray-50 rounded-[16px] flex flex-col transition-all overflow-scroll overflow-x-hidden items-center`">
        <i
            :class="`${state.openMainContent ? 'inline-block' : 'hidden'} z-[5] p-4 bg-gray-50 border-b h-10 w-full flex items-center ${currentTheme.text}`">
            <Button @click="closeFullScreen" classes="text-xs bg-transparent -translate-x-2 active:-translate-x-1"
                :append-icon="IconArrowLeft" icon-size="size-6" variant="">
            </Button>
        </i>
        <main
            :class="`container py-4 ${mainContentWidth == contentStore.mobileWidth ? 'px-6' : 'px-8 md:px-24 relative'}`">
            <draggable v-model="mainContent" ghost-class="ghost" item-key="id" :component-data="{ name: 'flip-list' }">
                <template #item="{ element, index }">
                    <component :is="element.mainComponent" :childrenCards="element.childrenCards"
                        :border="element.border" :heading="element.heading" :subHeading="element.subHeading"
                        :ImageSrc="element.ImageSrc" :HeaderLogo="element.HeaderLogo"
                        @click="activeBorder(element)">
                    </component>
                </template>
            </draggable>
        </main>

    </main>
</template>