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
import PlusCircleIcon from '@heroicons/vue/24/outline/PlusCircleIcon';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from "pinia";
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore);


const route = useRoute()
const router = useRouter();
const { push } = router;

const links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    path: "/about",
    name: "About",
    icon: InformationCircleIcon,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: PhoneIcon,
  },
  {
    path: "/page-builder",
    name: "PageBuilder",
    icon: PlusCircleIcon,
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
      :class="`${sidebarState ? 'absolute left-0 top-0' : 'left-0 w-[6rem]'} ${currentTheme.backgroundPrimary} absolute w-72  flex flex-col h-full px-6 py-4 gap-8 transition-all duration-300 ease-out`">
      <div class="flex items-center">
        <button>
          <Bars3Icon @click="toggleSidebar()"
            :class="`${currentTheme.text} size-10 ml-1 p-2 rounded-full cursor-pointer `" />
        </button>
      </div>
      <ul :class="`${currentTheme.text} flex flex-col justify-between h-full gap-2`">
        <div class="flex flex-col gap-2">
          <button v-for="link in links" @click="navigateTo(link.path)" :key="link"
            :class="`
              ${IsActiveLink(link.path) ? currentTheme.activeButton: currentTheme.button} 
              ${currentTheme.text} w-full p-2 text-center rounded-md cursor-pointer text-sm transition-all duration-300 ease-out`">
            <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'} ${IsActiveLink(link.path) ? 'font-semibold': ''}`">
              <component :is="link.icon" class='size-6 ml-1' />
              <p v-show="sidebarState" class='text-md'>{{ link.name }}</p>
            </div>
          </button>
        </div>
        <button @click="navigateTo('/settings')" :class="`
              ${IsActiveLink(`/theme-settings`) ? currentTheme.activeButton : currentTheme.button} 
            ${currentTheme.text} w-full p-2 text-center rounded-md cursor-pointer text-sm`">
          <div
            :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'} ${IsActiveLink('/theme-settings') ? 'font-semibold': ''} transition-all duration-300 ease-out`">
            <AdjustmentsVerticalIcon class='size-6 ml-1' />
            <p v-show="sidebarState" class='text-md'>Settings</p>
          </div>
        </button>
      </ul>
    </aside>
    <!-- Main Content  -->
    <div
      :class="`${sidebarState ? 'ml-72' : 'ml-24'} w-full flex flex-col h-full transition-all duration-300 ease-out`">
      <nav
        :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} flex gap-2 items-center p-4 font-bold text-xl h-max transition-all duration-300 ease-out`">
        <p class="cursor-pointer text-sm">{{ route.name }}</p>
      </nav>
      <RouterView />
    </div>
  </main>
</template>