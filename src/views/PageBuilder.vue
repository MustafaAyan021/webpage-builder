<script setup>
import Button from '@/components/button/Button.vue';
import Container from '@/components/container.vue';
import Input from '@/components/input/input.vue';
import Textarea from '@/components/input/textarea.vue';
import TrashIcon from '@heroicons/vue/24/outline/TrashIcon';
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
  const file = e.target.files[0]
  image.value = file ? URL.createObjectURL(file) : '';
}

const items = reactive([
   //Items
])
const handelItemSubmit = (e) => {
  const newItem = {
    heading: e.target.input.value,
    paragraph: e.target.textarea.value,
  }
  e.target.input.value = ''
  e.target.textarea.value = ''
  items.push(newItem)
}
</script>

<template>
  <aside
    :class="`${currentTheme.backgroundPrimary} absolute top-0 right-0 w-72 h-full py-3 px-4 flex flex-col gap-3 overflow-auto rounded-[16px] shadow-md`">
    <h1 :class="`${currentTheme.text} font-bold text-xl ml-1`">Edit Page :</h1>
    <Input v-model="state.heading" type="text" label="Heading" />
    <Input @change="handelImageSubmit" type="file" label="Choose Image" accept="image/*" />
    <img v-if="image" :src="image" class="rounded-lg" />
    <Textarea v-model="state.paragraph" label="Paragraph" classes="h-48" />
    <form @submit.prevent="handelItemSubmit" action="" class="flex flex-col gap-1">
      <h1 :class="`${currentTheme.text} font-bold text-xl ml-1`">Add Items :</h1>
      <Input type="text" label="Heading" required/>
      <Textarea label="Paragraph" classes="h-44" required/>
      <Button type="submit" variant="outline">Add Item</Button>
    </form>
    <div v-for="(item,index) in items"
      :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between items-center py-2 rounded-md px-3`">
      <h1 class="font-semibold items-center">{{index + 1 + ". "}} {{ item.heading.substring(0,14) + "..." }}</h1>
      <Button @click="items.splice(index,1)" variant="danger" classes="py-1 px-2 text-sm rounded-md" :appendIcon="TrashIcon" icon-size="size-5"></Button>
    </div>
  </aside>
  <Container classes="mr-64">
    <h1 :class="`${currentTheme.text} text-3xl font-semibold text-wrap`">{{ state.heading }}</h1>
    <section class="w-full flex flex-col gap-3 items-center">
      <img v-if="image" :src="image" class="max-w-[700px] text-wrap rounded-lg shadow-md" />
      <p v-show="state.paragraph" :class="` ${currentTheme.text} ${currentTheme.backgroundPrimary} shadow-md py-4 px-6 rounded-lg text-md text-wrap`">{{ state.paragraph }}</p>
    </section>
    <section class="grid grid-cols-3 w-full gap-12 mt-16">
      <div v-for="item in items" :class="`itemCard ${currentTheme.text} ${currentTheme.backgroundPrimary} h-max shadow-md py-4 px-6 rounded-lg w-64 flex flex-col items-center text-center`">
        <h1 class="font-semibold text-xl">{{ item.heading }}</h1>
        <p class="text-sm opacity-80">{{ item.paragraph }}</p>
      </div>
    </section>
  </Container>
</template>
