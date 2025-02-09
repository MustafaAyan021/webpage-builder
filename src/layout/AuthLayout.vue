<script setup>
import { onBeforeMount, ref, watchEffect } from "vue";
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
    path: "/dashboard/main",
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    path: "/dashboard/about",
    name: "About",
    icon: InformationCircleIcon,
  },
  {
    path: "/dashboard/contact",
    name: "Contact",
    icon: PhoneIcon,
  },
  {
    path: "/dashboard/page-builder",
    name: "PageBuilder",
    icon: PlusCircleIcon,
  },
]

onBeforeMount(themeStore.initializeTheme)
const navigateTo = (name) => (push(name));
const IsActiveLink = (currentRoute) => { return route.path.startsWith(currentRoute) }
const sidebarState = ref(false)
const toggleSidebar = () => {
  return sidebarState.value = !sidebarState.value
}
</script>

<template>
  <main class="flex h-screen selection:text-gray-700 selection:bg-gray-200">
    <!-- Sidebar -->
    <aside
      :class="`${sidebarState ? 'w-56 absolute left-0 top-0' : 'left-0 w-20'} ${currentTheme.backgroundPrimary} z-10 absolute  flex flex-col h-full px-4 py-2 gap-8 transition-all duration-200 ease-out`">
      <div class="flex items-center">
        <button>
          <Bars3Icon @click="toggleSidebar()"
            :class="`${currentTheme.text} ${currentTheme.hover} active:scale-95 size-10 ml-1 p-2 rounded-full cursor-pointer `" />
        </button>
      </div>
      <ul :class="`${currentTheme.text} flex flex-col justify-between h-full gap-1`">
        <div class="flex flex-col gap-1">
          <button v-for="link in links" @click="navigateTo(link.path)" :key="link"
            :class="`
              ${IsActiveLink(link.path) ? currentTheme.activeButton : currentTheme.button} 
              ${currentTheme.text} ${currentTheme.hover} active:opacity-70 active:scale-[99%] w-full p-2 text-center rounded-md cursor-pointer text-sm`">
            <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'flex justify-center'}`">
              <component :is="link.icon" :class="`size-5`" />
              <p v-show="sidebarState" class='text-md'>{{ link.name }}</p>
            </div>
          </button>
        </div>
        <button @click="navigateTo('/settings')" :class="`
              ${IsActiveLink(`/settings`) ? currentTheme.activeButton : currentTheme.button} 
            ${currentTheme.text} w-full p-2 text-center rounded-md cursor-pointer text-sm`">
          <div
            :class="`${sidebarState ? 'flex gap-4 items-center' : ' flex justify-center'} ${IsActiveLink('/theme-settings') ? 'font-semibold': ''} transition-all duration-300 ease-out`">
            <AdjustmentsVerticalIcon class='size-5' />
            <p v-show="sidebarState" class='text-md'>Settings</p>
          </div>
        </button>
      </ul>
    </aside>
    <!-- Main Content  -->
    <div
      :class="`${sidebarState ? 'ml-56' : 'ml-20'} w-full flex flex-col h-full transition-all duration-200 ease-out ${currentTheme.backgroundPrimary}`">
      <nav
        :class="`${currentTheme.backgroundPrimary} ${currentTheme.text} flex gap-2 items-center p-4 font-bold text-xl h-max transition-all duration-300 ease-out`">
        <p class="cursor-pointer text-sm">{{ route.name }}</p>
      </nav>
      <RouterView />
    </div>
  </main>
</template>cd vue-assig