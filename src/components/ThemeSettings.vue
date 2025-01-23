<script setup>
import { ref } from 'vue';
import ArrowSmallDownIcon from '@heroicons/vue/24/outline/ArrowSmallDownIcon'
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/ThemeSettings';
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
const { colorThemes } = themeStore;
const cards = ref([
    {
        id: 1,
        name: 'Theme Color',
        isToggled: false,
    },
])
const colorThemeButtons = [
    {
        id: 1,
        themeColor: colorThemes.gray,
        backgroundColor: colorThemes.gray.backgroundTwo,
    },
    {
        id: 2,
        themeColor: colorThemes.salmon,
        backgroundColor: colorThemes.salmon.background,
    },
    {
        id: 3,
        themeColor: colorThemes.teal,
        backgroundColor: colorThemes.teal.background,
    },
    {
        id: 4,
        themeColor: colorThemes.purple,
        backgroundColor: colorThemes.purple.backgroundTwo,
    },
    {
        id: 5,
        themeColor: colorThemes.orange,
        backgroundColor: colorThemes.orange.backgroundTwo,
    },
    {
        id: 6,          
        themeColor: colorThemes.pink,
        backgroundColor: colorThemes.pink.backgroundTwo,
    },
]
const toggleCard = (card) => {
    return card.isToggled = !card.isToggled;
}

</script>

<template>
    <section class="flex flex-col gap-2">
        <div v-for="card in cards" :key="card.id"
        :class="`${currentTheme.backgroundTwo} ${currentTheme.text} p-3  rounded-md transition-all duration-300 ease-out`">
        <button class="w-full h-full" @click="toggleCard(card)">
            <div :class="`flex justify-between items-center`">
                <h1 class="text-sm font-semibold">{{ card.name }}</h1>
                <ArrowSmallDownIcon
                    :class="`${card.isToggled ? '' : '-rotate-90'} size-6 transition-all duration-75`" />
            </div>
        </button>
        <div v-show="card.isToggled"
            class="flex justify-between ml-1 items-center flex-wrap mt-4 transition-all duration-300 ease-out">
            <div class="flex gap-2 ml-1 items-center flex-wrap">
                <button v-for="item in colorThemeButtons" :key="item.id" @click="currentTheme = item.themeColor"
                :class="`${item.backgroundColor} rounded-full border border-gray-700 w-7 h-7`">
                </button>
            </div>
            <button @click="currentTheme = colorThemes.gray" :class="`${currentTheme.button} p-2 px-3 text-sm rounded-md transition-all duration-300 ease-out`">Reset</button>
        </div>
    </div>
    </section>
</template>