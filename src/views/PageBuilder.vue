<script setup>
import Container from '@/components/container.vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import PageBuilderSidebar from '@/components/PageBuilderComponents/PageBuilderSidebar.vue';
import PageBuilderContent from '@/components/PageBuilderContent.vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

</script>

<template>
  <PageBuilderSidebar />
  <Container classes="mr-[332px] justify-center">
    <PageBuilderContent/>
  </Container>
</template>