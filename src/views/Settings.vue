<script setup>
import { ref } from 'vue';
import ContentContainer from '@/components/content-container.vue';
import ArrowSmallDownIcon from '@heroicons/vue/24/outline/ArrowSmallDownIcon'
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();   
const { darkSidebarTheme } = storeToRefs(themeStore);
const { darkHeaderTheme } = storeToRefs(themeStore);
const { darkContentAreaTheme } = storeToRefs(themeStore);

const cards = ref([
    {
        id:1,
        name:'Sidebar Settings',
        isToggled:false,
        theme:darkSidebarTheme,
    },
    {
        id:2,
        name:'Header Settings',
        isToggled:false,
        theme:darkHeaderTheme,
    },
    {
        id:2,
        name:'Content Area Settings',
        isToggled:false,
        theme:darkContentAreaTheme,
    },
])
//<----Functions and Variables---->
const toggleThemeSettings = (card) => {
    return card.isToggled = !card.isToggled;
}
</script>
    
<template>
    <ContentContainer>
        <div v-for="card in cards" :key="card.id" :class="`${darkContentAreaTheme ? 'bg-[#282A2C]' : 'bg-[#E1E1E1]'} card w-72  rounded-lg h-max p-3 px-4 flex flex-col gap-2`">
            <h1 class="text-xl font-bold w-full">{{ card.name }}</h1>
            <div :class="`${darkContentAreaTheme ? 'bg-[#282A2C]' : 'bg-[#F6F6F6]'} p-3 bg-[#333537] rounded-md`">
                <button class="w-full h-full" @click="toggleThemeSettings(card)">
                    <div :class="`flex justify-between items-center`">
                        <h1 class="text-lg font-semibold">Theme colors</h1>
                        <ArrowSmallDownIcon :class="`${card.isToggled ? '' : '-rotate-90'} size-6 transition-all duration-75`" />
                    </div>
                </button>
                <div v-show="card.isToggled" class="flex gap-2 ml-1 items-center flex-wrap mt-3">
                    <p class="text-sm">Dark</p>
                    <button @click="card.theme = true" class="rounded-full border bg-black w-5 h-5"></button>
                    <p   class="text-sm">Light</p>
                    <button @click="card.theme = false" class="rounded-full border border-black bg-white w-5 h-5"></button>
                </div>
            </div>
        </div>
    </ContentContainer>
</template>