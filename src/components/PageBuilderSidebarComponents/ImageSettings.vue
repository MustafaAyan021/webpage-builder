<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { ref } from 'vue';

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())
const { selectedComponent } = storeToRefs(usePageBuilderSidebarStore())

const image = ref('')
const imageName = ref('')
const handelImageSubmit = (e) => {
    const file = e.target.files[0]
    image.value = file ? URL.createObjectURL(file) : '';
    imageName.value = file.name;
}

</script>

<template>
    <div v-if="sidebarContent.openImageEditing">
        <Input type="file" label="Choose Image" :atChange="handelImageSubmit" accept="image/*"
            :fileName="imageName" />
    </div>
</template>