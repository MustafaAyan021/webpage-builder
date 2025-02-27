<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { IconChevronDown } from '@tabler/icons-vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { reactive, ref } from 'vue';
import { computed } from 'vue';
const { currentTheme } = storeToRefs(useThemeStore())
const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())

const headerLogo = computed({
      get:() => sidebarContent.value.selectedComponent?.HeaderLogo || '',
      set:(newValue) => {
         if(sidebarContent.value.selectedComponent?.HeaderLogo){
              sidebarContent.value.selectedComponent.HeaderLogo = newValue
         }
      }
})
const imageName = computed({
      get:() => sidebarContent.selectedComponent?.ImageName || '',
      set:(newValue) => {
        if(sidebarContent.value.selectedComponent?.ImageName){
            sidebarContent.value.selectedComponent.ImageName = newValue
        }
      }
})
const handelImageSubmit = (e) => {
    const file = e.target.files[0]
    image.value = file ? URL.createObjectURL(file) : '';
    HeaderLogo.value = file.name;
}
const themeColorButtonStatus = ref(false)
const toggleColorThemeButton = () => {
    themeColorButtonStatus.value = !themeColorButtonStatus.value
}
const headerColorThemes = reactive([
    {
      name:'Black and White',
      bgColor:'bg-gray-50',
      textColor:'bg-black',
    },
    {
      name:'White and Blue',
      bgColor:'bg-blue-500',
      textColor:'bg-gray-50',
    },
])
</script>

<template>
    <div class="flex flex-col gap-3" v-show="sidebarContent.openHeaderEditing">
        <h1 :class="`font-semibold text-xl mb-2 ${currentTheme.text}`">Header Settings</h1>
        <div>
            <Input type="file" label="Choose Header Logo" :atChange="handelImageSubmit" accept="image/*"
                :fileName="HeaderLogo" />
        </div>
        <div :class="`w-full flex flex-col gap-2 border-b transition-all ${currentTheme.borderColor} p-2`">
            <button @click="toggleColorThemeButton" :class="`w-full flex items-center justify-between`">
                <h1 :class="`text-sm ${currentTheme.text}`">Theme Colors</h1>
                <IconChevronDown size="26"
                    :class="`mb-1 ${themeColorButtonStatus ? 'rotate-[0deg]' : 'rotate-[-90deg]'} transition-all duration-75`"
                    stroke="1" />
            </button>
            <div v-show="themeColorButtonStatus" :class="` flex flex-col gap-1`">
                <div v-for="theme in headerColorThemes" :class="`w-full flex justify-between items-center p-2 border ${currentTheme.borderColor} rounded-lg cursor-pointer active:opacity-90`">
                    <h1 :class="`text-sm ${currentTheme.text}`">{{ theme.name }}</h1>
                    <div class="w-max flex">
                        <i :class="`${theme.textColor} h-7 w-7 rounded-full border ${currentTheme.borderColor}`"></i>
                        <i :class="`${theme.bgColor} h-7 w-7 rounded-full border ${currentTheme.borderColor} -ml-3`"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
