<script setup>
import { ref } from 'vue';
import ContentContainer from '@/components/container.vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import { RouterView, useRouter } from 'vue-router';
const router = useRouter()
const { push } = router
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
const settingsTabs = [
    {
        name: 'Theme',
        path: '/settings/theme-settings'
    }
]

const navigateTo = (name) => (push(name));
</script>

<template>
    <ContentContainer classes="p-0 px-0">
        <div class="w-full h-full flex">
            <aside
                :class="`${currentTheme.backgroundSecondary} w-64 h-full flex flex-col gap-2 p-6 transition-all duration-300 ease-out`">
                <button v-for="tab in settingsTabs" @click="navigateTo(tab.path)"
                    :class="`${currentTheme.activeButton} ${currentTheme.text} list-none text-center px-3 py-2 rounded-md font-semibold text-sm transition-all duration-300 ease-out`">{{
                        tab.name }}</button>
            </aside>
            <main
                :class="`${currentTheme.backgroundPrimary} w-full h-full bg-[#333537] p-6 rounded-tl-lg transition-all duration-300 ease-out`">
                <RouterView />
            </main>
        </div>
    </ContentContainer>
</template>