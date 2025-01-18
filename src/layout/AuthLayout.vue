<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router"
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
//<----Sidebar Imports starts ---->
import Bars3Icon from "@heroicons/vue/24/outline/Bars3Icon"
import HomeIcon from "@heroicons/vue/24/outline/HomeIcon"
import PhoneIcon from '@heroicons/vue/24/outline/PhoneIcon';
import InformationCircleIcon from '@heroicons/vue/24/outline/InformationCircleIcon';
import AdjustmentsVerticalIcon from '@heroicons/vue/24/outline/AdjustmentsVerticalIcon';
//<----Sidebar Imports Finishes ----> 

//<----Global Variables---->  
const route = useRoute()
const router = useRouter();
const { push } = router;

//<----Arrays and Objects---->
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

//<----Functions and Variables---->
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
      :class="`${sidebarState ? 'absolute left-0 top-0' : 'left-0 w-24'} absolute w-64 bg-gradient-to-bl from-black via-gray-800 bg-black flex flex-col h-full px-6 py-4 gap-8 border-r-2 border-gray-700 transition-all duration-300 ease-out`">
      <div class="flex items-center">
        <Bars3Icon @click="toggleSidebar()" class="size-8 ml-2 cursor-pointer text-white" />
      </div>
      <ul class="flex text-black flex-col justify-between h-full">
     <div class="flex flex-col gap-2">
      <li v-for="link in links" @click="navigateTo(link.name)" :key="link"
          :class="`${IsActiveLink(`/${link.name}`) ? 'bg-white' : 'text-white bg-gray-700'}  w-full p-2 text-center  rounded-md cursor-pointer`">
          <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'}`">
            <component :is="link.icon" class='size-7' />
            <p :class="`${sidebarState ? '' : ' opacity-0 hidden'} font-semibold text-lg`">{{ link.name }}</p>
          </div>
        </li>
     </div>
        <li @click="navigateTo('/settings')"
          :class="`${IsActiveLink(`/settings`) ? 'bg-white' : 'text-white bg-gray-700'} w-full p-2 mb-4 text-center  rounded-md cursor-pointer text-white`">
          <div :class="`${sidebarState ? 'flex gap-4 items-center' : 'justify-center'}`">
            <AdjustmentsVerticalIcon class='size-7'/>
            <p :class="`${sidebarState ? '' : ' opacity-0 hidden'} font-semibold text-lg`">Settings</p>
          </div>
        </li>
      </ul>
    </aside>
    <!-- Main Content  -->
    <div :class="`${sidebarState ? 'ml-64' : 'ml-24'} w-full flex flex-col h-full transition-all duration-300 ease-out`">
      <nav
        class="bg-gradient-to-r flex gap-2 items-center from-black via-gray-800 bg-black text-white p-4 font-bold text-xl h-max border-b-2 border-gray-700">
        <p class="cursor-pointer">{{ route.name }}</p>
      </nav>
      <RouterView />
    </div>
  </main>
</template>