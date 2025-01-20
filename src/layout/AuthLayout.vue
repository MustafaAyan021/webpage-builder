<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router"
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import Bars3Icon from "@heroicons/vue/24/outline/Bars3Icon"
import HomeIcon from "@heroicons/vue/24/outline/HomeIcon"
import PhoneIcon from '@heroicons/vue/24/outline/PhoneIcon';
import InformationCircleIcon from '@heroicons/vue/24/outline/InformationCircleIcon';
import AdjustmentsVerticalIcon from '@heroicons/vue/24/outline/AdjustmentsVerticalIcon';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from "pinia";

const themeStore = useThemeStore()
const { darkSidebarTheme } = storeToRefs(themeStore)
const { darkHeaderTheme } = storeToRefs(themeStore);

const route = useRoute()
const router = useRouter();
const { push } = router;

const links = [
  {
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    name: "About",
    icon: InformationCircleIcon,
  },
  {
    name: "Contact",
    icon: PhoneIcon,
  },
]

const navigateTo = (name) => (push(name));
const IsActiveLink = (currentRoute) => { return route.path == currentRoute }
const sidebarState = ref(false)
const toggleSidebar = () => {
  return sidebarState.value = !sidebarState.value
}
</script>

<template>
  <main class="flex h-screen justify-center">
    <!-- Sidebar -->
    <aside
      :class="`${sidebarState ? 'absolute left-0 top-0' : 'left-0 w-[6rem]'} ${darkSidebarTheme ? 'bg-[#282A2C]' : 'bg-[#ECECEC]'} absolute w-72  flex flex-col h-full px-6 py-4 gap-8 transition-all duration-300 ease-out`">
      <div class="flex items-center">
        <button>
          <Bars3Icon @click="toggleSidebar()"
            :class="`${darkSidebarTheme ? 'hover:bg-[#333537] text-white' : 'hover:bg-gray-300 text-[#333537]'} size-10 ml-1 p-2 rounded-full cursor-pointer `" />
        </button>
      </div>
      <ul class="flex text-black flex-col justify-between h-full">
        <div class="flex flex-col gap-2">
          <li v-for="link in links" @click="navigateTo(link.name)" :key="link" :class="`
              ${IsActiveLink(`/${link.name}`) && darkSidebarTheme ? 'bg-[#202123]' : ''} 
              ${IsActiveLink(`/${link.name}`) && !darkSidebarTheme ? 'bg-[#A9A9A9]' : ''}
              ${!IsActiveLink(`/${link.name}`) && darkSidebarTheme ? 'bg-[#333537]' : ''} 
              ${!IsActiveLink(`/${link.name}`) && !darkSidebarTheme ? 'bg-[#D3D3D3]' : ''}
              ${darkSidebarTheme ? 'text-white ' : ''} w-full p-2 text-center rounded-md cursor-pointer`">
            <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'}`">
              <component :is="link.icon" class='size-7' />
              <p v-show="sidebarState" class='text-md'>{{ link.name }}</p>
            </div>
          </li>
        </div>
        <li @click="navigateTo('/settings')" :class="`
              ${IsActiveLink('/settings') && darkSidebarTheme ? 'bg-[#202123]' : ''} 
              ${IsActiveLink('/settings') && !darkSidebarTheme ? 'bg-[#A9A9A9]' : ''}
              ${!IsActiveLink('/settings') && darkSidebarTheme ? 'bg-[#333537]' : ''} 
              ${!IsActiveLink('/settings') && !darkSidebarTheme ? 'bg-[#E1E1E1]' : ''}
              ${darkSidebarTheme ? 'text-white ' : ''} w-full p-2 text-center rounded-md cursor-pointer`">
          <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'}`">
            <AdjustmentsVerticalIcon class='size-7' />
            <p v-show="sidebarState" class='text-md'>Settings</p>
          </div>
        </li>
      </ul>
    </aside>
    <!-- Main Content  -->
    <div
      :class="`${sidebarState ? 'ml-72' : 'ml-24'} w-full flex flex-col h-full transition-all duration-300 ease-out`">
      <nav :class="`${darkHeaderTheme ? 'bg-[#1B1C1D] text-white' : 'bg-[#F6F6F6] text-black'} flex gap-2 items-center p-4 font-bold text-xl h-max transition-all`">
        <p class="cursor-pointer">{{ route.name }}</p>
      </nav>
      <RouterView />
    </div>
  </main>
</template>