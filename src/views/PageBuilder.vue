<script setup>
import Button from '@/components/button/Button.vue';
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

const items = reactive([
   //Items
])
const handelItemSubmit = (e) => {
  const newItem = {
    heading: e.srcElement.input.value,
    paragraph: e.srcElement.textarea.value,
  }
  e.srcElement.input.value = ''
  e.srcElement.textarea.value = ''
  items.push(newItem)
}
</script>

<template>
  <aside
    :class="`${currentTheme.backgroundPrimary} absolute top-0 right-0 w-64 h-full p-3 flex flex-col gap-3 overflow-auto`">
    <h1 :class="`${currentTheme.text} font-bold text-xl ml-1`">Edit Page :</h1>
    <Input v-model="state.heading" type="text" label="Heading" />
    <Input @change="handelImageSubmit" type="file" label="Choose Image" accept="image/*" />
    <img v-if="image" :src="image" class="rounded-lg" />
    <Textarea v-model="state.paragraph" label="Paragraph" classes="h-48" />
    <form @submit.prevent="handelItemSubmit" action="" class="flex flex-col gap-1">
      <h1 :class="`${currentTheme.text} font-bold text-xl ml-1`">Add Items :</h1>
      <Input type="text" label="Heading" required/>
      <Textarea label="Paragraph" classes="h-44" required/>
      <Button type="submit" variant="outline">Add</Button>
    </form>
    <div v-for="(item,index) in items"
      :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between py-2 rounded-md px-3`">
      <h1 class="font-semibold items-center">{{ item.heading }}</h1>
      <Button @click="items.splice(index,1)" variant="danger" classes="p-1 px-2 text-sm rounded-md">Delete</Button>
    </div>
  </aside>
  <Container classes="mr-64">
    <section class="w-full flex flex-col gap-2">
      <h1 :class="`${currentTheme.text} text-3xl font-semibold text-wrap`">{{ state.heading }}</h1>
      <img v-if="image" :src="image" class="max-w-72 text-wrap" />
      <p :class="`${currentTheme.text} text-lg text-wrap`">{{ state.paragraph }}</p>
    </section>
    <section class="grid grid-cols-3 w-full gap-12">
      <div v-for="item in items" :class="`itemCard ${currentTheme.text} w-64 flex flex-col items-center text-center`">
        <h1 class="font-semibold text-xl">{{ item.heading }}</h1>
        <p class="text-sm">{{ item.paragraph }}</p>
      </div>
    </section>
  </Container>
</template>
