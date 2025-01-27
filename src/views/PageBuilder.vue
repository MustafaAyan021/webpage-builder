<script setup>
import Container from '@/components/container.vue';
import Input from '@/components/input/input.vue';
import Textarea from '@/components/input/textarea.vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)
const state = reactive({
  heading: '',
  paragraph: '',
})
const image = ref('')
const handelImageSubmit = (e) => {
  const file = e.target.files?.[0]
  image.value = file ? URL.createObjectURL(file) : '';
}
</script>

<template>
  <Container classes="mr-64">
    <aside :class="`${currentTheme.backgroundPrimary} absolute top-0 right-0 w-64 h-full p-3 flex flex-col gap-3 overflow-auto`">
        <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Edit Page :</h1>
        <Input v-model="state.heading" type="text" label="Heading" />
        <Input @change="handelImageSubmit" type="file" label="Choose Image" accept="image/*" />
        <img v-if="image" :src="image" class="rounded-lg" />
        <Textarea v-model="state.paragraph" label="Paragraph" classes="h-48" />
    </aside>
    <section class="w-full flex flex-col gap-2">
      <h1 :class="`${currentTheme.text} text-3xl font-semibold text-wrap max-w-[700px]`">{{ state.heading }}</h1>
      <img v-if="image" :src="image" class="max-w-72 rounded-lg" />
      <p :class="`${currentTheme.text} text-lg`">{{ state.paragraph }}</p>
    </section>
  </Container>
</template>