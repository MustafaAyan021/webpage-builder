<script setup>
import { RouterLink } from 'vue-router';
import { useRoute , useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter();
const {push} = router;
const navigateTo = (name) => (push(name));
const IsActiveLink = (currentRoute) => {return route.path == currentRoute}
</script>

<template>
    <aside class="w-64 bg-gradient-to-bl from-black via-gray-800 bg-black flex flex-col h-full px-6 py-4 gap-8 border-r-2 border-gray-700">
        <li @click="navigateTo('/home')" class="logo text-white text-2xl font-bold list-none cursor-pointer">
            Logo
        </li>
         <ul class="flex text-black flex-col gap-2">
          <li v-for="link in ['Dashboard','Contact','About']" 
          @click="navigateTo(link)" :key="link" 
          :class="`${IsActiveLink(`/${link}`) ? 'bg-white' : 'text-white bg-gray-700'} text-lg w-full p-2 text-center  rounded-md cursor-pointer`">
            {{ link }}
          </li>
         </ul>
    </aside>
</template>