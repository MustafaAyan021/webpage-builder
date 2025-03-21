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
import { v4 as uuidv4 } from 'uuid';
import { IconEdit } from '@tabler/icons-vue';

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())

let imageSrc = ref('')
let imageName = ref('');
let childrenCards = computed({
    get: () => sidebarContent.value.selectedComponent?.childrenCards || [],
    set: (newValue) => {
        if (sidebarContent.value.selectedComponent?.childrenCards) {
            sidebarContent.value.selectedComponent.childrenCards = newValue
        }
    }
})
let isActiveEditForm = ref(false)
let imageToBeEdited = ref('')
let imageNameTobeEdited = ref('')
let headingToBeEdited = ref('')
let paragraphToBeEdited = ref('')
let selectedCard = ref(null)
const activateEditForm = (card) => {
    selectedCard.value = card
    isActiveEditForm.value = true;
    imageToBeEdited.value = card.image;
    imageNameTobeEdited.value = card.imageName,
        headingToBeEdited.value = card.heading;
    paragraphToBeEdited.value = card.paragraph;
}
const handleImageToBeEditedSubmit = (e) => {
    const file = e.target.files[0];
    imageToBeEdited.value = file ? URL.createObjectURL(file) : '';
    imageNameTobeEdited.value = file.name;
};
const editCard = () => {
    isActiveEditForm.value = false;
    if (selectedCard.value) {
        selectedCard.value.image = imageToBeEdited.value;
        selectedCard.value.imageName = imageNameTobeEdited.value;
        selectedCard.value.heading = headingToBeEdited.value;
        selectedCard.value.paragraph = paragraphToBeEdited.value
    }
    selectedCard.value = null;
}
let activeInputAlert = ref(false)
let cardHeading = ref('');
let cardParagraph = ref('');

const handleImageSubmit = (e) => {
    const file = e.target.files[0];
    imageSrc.value = file ? URL.createObjectURL(file) : '';
    imageName.value = file.name;
};

const handleItemSubmit = (e) => {
    activeInputAlert.value = true;
    if (cardHeading.value != '' && cardParagraph.value != '' && imageSrc.value != '') {
        const newItem = {
            id: uuidv4(),
            heading: cardHeading.value,
            paragraph: cardParagraph.value,
            image: imageSrc.value,
            imageName: imageName.value,
        };
        childrenCards.value = [...childrenCards.value, newItem]
        cardHeading.value = '';
        cardParagraph.value = '';
        imageName.value = '';
        activeInputAlert.value = false;
        console.log(sidebarContent.value.selectedComponent)
    };
};
</script>

<template>
    <div id="card-editing" v-show="sidebarContent.openCardEditing">
        <div
            :class="`${isActiveEditForm ? 'visible' : 'invisible'} fixed left-0 top-0 z-10 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center`">
            <div
                :class="`${currentTheme.backgroundSecondary} w-1/4 m-2 h-max rounded-lg flex flex-col gap-1 p-3 shadow-md`">
                <h1 :class="`${currentTheme.text} font-bold text-lg ml-1 mb-3`">Edit Card</h1>
                <div>
                    <Input type="file" label="Choose Card Image" :atChange="handleImageToBeEditedSubmit"
                        accept="image/*" :fileName="imageNameTobeEdited" />
                </div>
                <p v-show="activeInputAlert && imageName == ''" class="text-sm text-red-600 ml-3">Please Select an Image
                </p>
                <Input v-model="headingToBeEdited" type="text" label="Heading" />
                <p v-show="activeInputAlert && headingToBeEdited == ''" class="text-sm text-red-600 ml-3"> Please fill
                    the
                    folloing field</p>
                <Textarea v-model="paragraphToBeEdited" label="Paragraph" classes="h-44" maxlength="80" />
                <p v-show="activeInputAlert && paragraphToBeEdited == ''" class="text-sm text-red-600 ml-3"> Please fill
                    the
                    folloing field</p>
                <div class="w-full h-max flex items-center justify-between mt-1">
                    <Button @click="isActiveEditForm = false" type="submit" variant="danger"
                        classes="py-1 text-sm">Cancel</Button>
                    <Button type="submit" variant="success" classes="py-1 text-sm" @click="editCard">Done</Button>
                </div>
            </div>
        </div>

        <h1 :class="`${currentTheme.text} font-bold text-lg ml-1 mb-3`">Add Card</h1>
        <div class="flex flex-col gap-1">
            <div>
                <Input type="file" label="Choose Card Image" :atChange="handleImageSubmit" accept="image/*"
                    :fileName="imageName" />
            </div>
            <p v-show="activeInputAlert && imageName == ''" class="text-sm text-red-600 ml-3">Please Select an Image</p>
            <Input v-model="cardHeading" type="text" label="Heading" />
            <p v-show="activeInputAlert && cardHeading == ''" class="text-sm text-red-600 ml-3"> Please fill the
                folloing field</p>
            <Textarea v-model="cardParagraph" label="Paragraph" classes="h-44" maxlength="80" />
            <p v-show="activeInputAlert && cardParagraph == ''" class="text-sm text-red-600 ml-3"> Please fill the
                folloing field</p>
            <Button type="submit" variant="solid" @click="handleItemSubmit">Add Item</Button>
        </div>
        <h1 v-show="childrenCards.length > 0" :class="`${currentTheme.text} font-bold text-lg ml-1 mt-3`">Edit Cards
        </h1>
        <div v-for="(card, index) in childrenCards"
            :class="`${currentTheme.backgroundSecondary} ${currentTheme.text} itemAside flex justify-between mt-2 items-center py-2 rounded-md px-3`">
            <h1 class="font-semibold items-center">{{ index + 1 + " - " }} {{ card.heading.substring(0, 14) + "..."
                }}
            </h1>
            <div>
                <Button @click="activateEditForm(card)" variant="outline" classes="py-1 px-2 text-sm rounded-md"
                    :appendIcon="IconEdit" icon-size="size-5"></Button>
                <Button @click="childrenCards.splice(index, 1)" variant="outline" classes="py-1 px-2 text-sm rounded-md"
                    :appendIcon="TrashIcon" icon-size="size-5"></Button>
            </div>
        </div>
    </div>
</template>