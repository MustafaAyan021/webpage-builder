<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import TrashIcon from '@heroicons/vue/24/outline/TrashIcon';
import { computed, ref } from 'vue';
import { reactive } from 'vue';
import { useThemeStore } from '@/stores/ThemeSettings';
import Textarea from '../input/textarea.vue';
import Paragraph from '../PageBuilderComponents/Paragraph.vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())

// let imageSrc = computed({
//     get: () => sidebarContent.value.selectedComponent?.ImageSrc || '',
//     set: (newValue) => {
//         if (sidebarContent.value.selectedComponent?.ImageSrc) {
//             sidebarContent.value.selectedComponent.ImageSrc = newValue
//         };
//     }
// });

let imageName = ref('');
const items = reactive([
    //Items
])
let CardHeading = ref('');
let CardParagraph = ref('');

const handelImageSubmit = (e) => {
    const file = e.target.files[0];
    //   imageSrc = file ? URL.createObjectURL(file) : '';
    imageName.value = file ? file.name : '';
};

const handelItemSubmit = (e) => {
    const newItem = {
        heading: CardHeading,
        paragraph: CardParagraph,
    };
    items.push(newItem);
    CardHeading = '';
    CardParagraph = '';
    imageName.value = '';
};
</script>

<template>
    <div id="card-editing" v-show="sidebarContent.openCardEditing">
        <h1 :class="`${currentTheme.text} font-bold text-lg ml-1`">Add Card</h1>
        <form @submit.prevent="handelItemSubmit" action="" class="flex flex-col gap-1">
            <div>
                <Input type="file" label="Choose Card Image" :atChange="handelImageSubmit" accept="image/*"
                    :fileName="imageName" />
            </div>
            <Input v-model="CardHeading" type="text" label="Heading" />
            <Textarea v-model="CardParagraph" label="Paragraph" classes="h-44" maxlength="80" />
            <Button type="submit" variant="solid">Add Item</Button>
        </form>
        <div v-for="(item, index) in items"
            :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between mt-2 items-center py-2 rounded-md px-3`">
            <h1 class="font-semibold items-center">{{ index + 1 + ". " }} {{ item.heading.substring(0, 14) + "..."
            }}
            </h1>
            <Button @click="items.splice(index, 1)" variant="danger" classes="py-1 px-2 text-sm rounded-md"
                :appendIcon="TrashIcon" icon-size="size-5"></Button>
        </div>
    </div>
</template>