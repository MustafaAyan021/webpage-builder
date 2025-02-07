<script setup>
import Button from '@/components/button/Button.vue';
import Container from '@/components/container.vue';
import Input from '@/components/input/input.vue';
import Textarea from '@/components/input/textarea.vue';
import TrashIcon from '@heroicons/vue/24/outline/TrashIcon';
import DevicePhoneMobileIcon from '@heroicons/vue/24/outline/DevicePhoneMobileIcon';
import ComputerDesktopIcon from '@heroicons/vue/24/outline/ComputerDesktopIcon';
import { IconArrowsMaximize } from '@tabler/icons-vue';
import { IconX } from '@tabler/icons-vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
import PageBuilderSidebar from '@/components/PageBuilderSidebar.vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const state = reactive({
  heading: '',
  paragraph: '',
  mainContentWidth: 'w-full',
  openMainContent: false,
})


const responsiveButtons = [
  {
    icon: ComputerDesktopIcon,
    buttonFunction: () => (state.mainContentWidth = 'w-full'),
  },
  {
    icon: DevicePhoneMobileIcon,
    buttonFunction: () => (state.mainContentWidth = 'w-[390px]'),
  },
  {
    icon: IconArrowsMaximize,
    buttonFunction: () => {
      state.mainContentWidth = 'absolute top-0 left-0 w-full h-[100%] rounded-none'
      state.openMainContent = !state.openMainContent
    },
  }
]
const closeFullScreen = () => {
  state.mainContentWidth = 'w-full relative'
  state.openMainContent = false
}
</script>

<template>
  <PageBuilderSidebar />
  <Container classes="mr-[332px] justify-center">
    <div
      :class="`flex gap-1 p-1 ${currentTheme.activeButton} rounded-[12px] shadow-inner absolute top-2 right-[22rem]`">
      <Button v-for="btn in responsiveButtons" :key="btn.icon" @click="btn.buttonFunction()" variant="solid"
        :classes="`${currentTheme.backgroundPrimary} hover:opacity-100 opacity-90 active:scale-95 text-sm rounded-md`"
        :append-icon="btn.icon"></Button>
    </div>
    <main
      :class="`${state.mainContentWidth} shadow border border-gray-200 h-[100%] bg-gray-50 rounded-[16px] overflow-hidden`">
      <i :class="`${state.openMainContent ? 'inline-block' : 'hidden'} absolute top-0 right-0 p-4 bg-gray-300 hover:bg-red-500 rounded-full aspect-[1/1] flex items-center m-2 ${currentTheme.text} active:scale-95 active:opacity-70`"
        @click="closeFullScreen">
        <IconX stroke='3' size="24" />
      </i>
    </main>
  </Container>
</template>