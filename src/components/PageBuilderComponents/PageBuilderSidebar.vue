<script setup>
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import HeaderSettings from '../PageBuilderSidebarComponents/HeaderSettings.vue';
import HeadingSettings from '../PageBuilderSidebarComponents/HeadingSettings.vue';
import SubHeadingSettings from '../PageBuilderSidebarComponents/SubHeadingSettings.vue';
import ImageSettings from '../PageBuilderSidebarComponents/ImageSettings.vue';
import ParagraphSettings from '../PageBuilderSidebarComponents/ParagraphSettings.vue';
import CardSettings from '../PageBuilderSidebarComponents/CardSettings.vue';
import FooterSettings from '../PageBuilderSidebarComponents/FooterSettings.vue';
import Button from '../button/Button.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import AddComponents from '../PageBuilderSidebarComponents/AddComponents.vue';
import Structure from '../PageBuilderSidebarComponents/Structure.vue';
import { IconArrowLeft } from '@tabler/icons-vue';
import { IconCategoryPlus } from '@tabler/icons-vue';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())
const contentStore = usePageBuilderContent()
const { mainContent } = storeToRefs(contentStore)
</script>

<template>
    <aside
        :class="`${currentTheme.backgroundPrimary} absolute z-10 top-0 right-0 w-80 h-full py-3 px-4 flex flex-col gap-3 overflow-auto ${currentTheme.borderColor}`">
        <div :class="`flex justify-between w-full items-center`">
            <Button classes="text-xs bg-transparent -translate-x-2 active:-translate-x-1" variant=""
                @click="sidebarStore.showStructureFunc">
                <IconArrowLeft stroke="1" size="30" />
            </Button>
            <Button classes="text-sm h-10" variant="outline" @click="sidebarStore.showAddItemFunc">
                <IconCategoryPlus stroke="1" />
            </Button>
        </div>
        <main>
            <AddComponents />
            <Structure />
            <HeaderSettings />
            <HeadingSettings />
            <SubHeadingSettings />
            <ImageSettings />
            <CardSettings />
            <FooterSettings />
        </main>
    </aside>
</template>