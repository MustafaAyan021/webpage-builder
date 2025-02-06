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

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const state = reactive({
  heading: '',
  paragraph: '',
  mainContentWidth: 'w-full',
  openMainContent: false,
})

const image = ref('')
const imageName = ref('')
const handelImageSubmit = (e) => {
  const file = e.target.files[0]
  image.value = file ? URL.createObjectURL(file) : '';
  imageName.value = file.name
}

const items = reactive([
  //Items
])
const handelItemSubmit = (e) => {
  const newItem = {
    heading: e.target.input.value,
    paragraph: e.target.textarea.value,
  }
  e.target.input.value = ''
  e.target.textarea.value = ''
  items.push(newItem)
}
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
  <aside
    :class="`${currentTheme.backgroundPrimary} absolute top-0 right-0 w-80 h-full py-3 px-4 flex flex-col gap-3 overflow-auto border-l ${currentTheme.borderColor}`">
    <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Edit Page</h1>
    <Input v-model="state.heading" type="text" label="Heading" />
    <div>
      <Input @change="handelImageSubmit" type="file" label="Choose Image" accept="image/*"
        :classes="`${imageName ? 'rounded-b-none' : ''}`" />
      <div :class="`px-3 py-1 border ${currentTheme.borderColor} flex gap-2 border-t-0 w-full rounded-md rounded-t-none`"
        v-show="imageName">
        <p :class="`text-sm font-semibold ${currentTheme.text}`">Selected Image : </p>
        <span :class="`text-sm ${currentTheme.text} font-mono`"> {{ imageName.substring(0,12) + '...' }} </span>
      </div>
    </div>
    <Textarea v-model="state.paragraph" label="Paragraph" classes="h-48" />
    <form @submit.prevent="handelItemSubmit" action="" class="flex flex-col gap-1">
      <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Add Items</h1>
      <Input type="text" label="Heading" required />
      <Textarea label="Paragraph" classes="h-44" required />
      <Button type="submit" variant="solid">Add Item</Button>
    </form>
    <div v-for="(item, index) in items"
      :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between items-center py-2 rounded-md px-3`">
      <h1 class="font-semibold items-center">{{ index + 1 + ". " }} {{ item.heading.substring(0, 14) + "..." }}</h1>
      <Button @click="items.splice(index, 1)" variant="danger" classes="py-1 px-2 text-sm rounded-md"
        :appendIcon="TrashIcon" icon-size="size-5"></Button>
    </div>
  </aside>
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