<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { usePageBuilderContent } from '@/stores/PageBuilderContent';
import { IconTrash } from '@tabler/icons-vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import draggable from 'vuedraggable';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const contentStore = usePageBuilderContent()
const { mainContentWidth } = storeToRefs(contentStore)
const { mainContent } = storeToRefs(contentStore)
const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())
</script>

<template>
  <div v-show="sidebarContent.showStructure">
    <h1 :class="`font-semibold text-xl mb-6 ${currentTheme.text}`">Structure</h1>
    <draggable v-model="mainContent" item-key="id" class="flex flex-col gap-1">
      <template #item="{ element , index }">
        <div
          :class="`w-full py-1 px-2 text-center rounded-md ${currentTheme.text} border cursor-pointer ${currentTheme.borderColor}`">
          <div class="flex justify-between items-center">
            <h1 class="text-sm">{{ element.name }}</h1>
            <i @click="mainContent.splice(index , 1)"><IconTrash/></i>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>