<script setup>
import Button from '@/components/button/Button.vue';
import Input from '@/components/input/input.vue';
import Textarea from '@/components/input/textarea.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { useThemeStore } from '@/stores/ThemeSettings';
import TrashIcon from '@heroicons/vue/24/outline/TrashIcon';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const sidebarStore = usePageBuilderSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)


const state = reactive({
    heading: '',
    paragraph: '',
})

const image = ref('')
const imageName = ref('')
const handelImageSubmit = (e) => {
    const file = e.target.files[0]
    image.value = file ? URL.createObjectURL(file) : '';
    imageName.value = file.name
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
        :class="`${currentTheme.backgroundPrimary} absolute z-10 top-0 right-0 w-80 h-full py-3 px-4 flex flex-col gap-3 overflow-auto border-l ${currentTheme.borderColor}`">
        <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Edit Page</h1>
        <div v-show="sidebarContent.openHeadingEditing" id="heading-editing">
            <Input type="text" label="Heading" />
        </div>
        <div v-show="sidebarContent.openSubHeadingEditing" id="heading-editing">
            <Input type="text" label    ="Sub Heading" />
        </div>
        <div id="image-editing" v-show="sidebarContent.openImageEditing">
            <Input :atChange="handelImageSubmit" type="file" :fileName="imageName" label="Choose Image" accept="image/*"
                :classes="``" />
        </div>
        <div id="paragrahh-editing" v-show="sidebarContent.openParagraphEditing">
            <Textarea v-model="state.paragraph" label="Paragraph" classes="h-48" />
        </div>
       <div id="card-editing" v-show="sidebarContent.openCardEditing">
        <form @submit.prevent="handelItemSubmit" action="" class="flex flex-col gap-1">
            <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Add Items</h1>
            <Input type="text" label="Heading" />
            <Textarea label="Paragraph" classes="h-44" />
            <Button type="submit" variant="solid">Add Item</Button>
        </form>
        <div v-for="(item, index) in items"
            :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between items-center py-2 rounded-md px-3`">
            <h1 class="font-semibold items-center">{{ index + 1 + ". " }} {{ item.heading.substring(0, 14) + "..." }}
            </h1>
            <Button @click="items.splice(index, 1)" variant="danger" classes="py-1 px-2 text-sm rounded-md"
                :appendIcon="TrashIcon" icon-size="size-5"></Button>
        </div>
       </div>
    </aside>
</template>