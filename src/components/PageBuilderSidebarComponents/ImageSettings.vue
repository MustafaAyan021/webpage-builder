<script setup>
import { storeToRefs } from 'pinia';
import Button from '../button/Button.vue';
import Input from '../input/input.vue';
import { usePageBuilderSidebarStore } from '@/stores/PageBuilderSidebarStore';
import { computed, ref, watchEffect } from 'vue';

const { sidebarContent } = storeToRefs(usePageBuilderSidebarStore())

let imageSrc = computed({
    get: () => sidebarContent.value.selectedComponent?.ImageSrc || '',
    set: (newValue) => {
        if (sidebarContent.value.selectedComponent?.ImageSrc) {
            sidebarContent.value.selectedComponent.ImageSrc = newValue
        }
    }
})

let imageName = computed({
    get: () => sidebarContent.value.selectedComponent?.ImageName || '',
    set: (newValue) => {
        if (sidebarContent.value.selectedComponent) {
            sidebarContent.value.selectedComponent.ImageName = newValue;
        }
    }
});


const handelImageSubmit = (e) => {
    const file = e.target.files[0]
    imageSrc.value = file ? URL.createObjectURL(file) : '';
    imageName.value = file.name;
}

</script>

<template>
    <div v-if="sidebarContent.openImageEditing">
        <Input type="file" label="Choose Image" :atChange="handelImageSubmit" accept="image/*"
            :fileName="imageName" />
    </div>
</template>