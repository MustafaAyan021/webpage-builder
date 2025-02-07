import { defineStore } from "pinia";
export const usePageBuilderSidebarStore = defineStore('PageBuilderSidebarStore', {
    state: () => ({
        showAddItem: true,
        showStructure: false,
        openHeadingEditing: false,
        openImageEditing: false,
        openParagraphEditing: false,
        openCardEditing: false,
    }),
    actions: {
        showAddItemFunc() {
            this.showAddItem = !this.showAddItem
            this.showStructure = false
            this.openHeadingEditing = false
            this.openParagraphEditing = false
            this.openImageEditing = false
            this.openCardEditing = false
        },

        showStructureFunc() {
            this.showStructure = !this.showStructure
            this.showAddItem = false
            this.openHeadingEditing = false
            this.openParagraphEditing = false
            this.openImageEditing = false
            this.openCardEditing = false
        },

        openHeadingEditingFunc() {
            this.openHeadingEditing = !this.openHeadingEditing
            this.showAddItem = false
            this.showStructure = false
            this.openParagraphEditing = false
            this.openImageEditing = false
            this.openCardEditing = false
        },

        openParagraphEditingFunc() {
            this.openParagraphEditing = !this.openParagraphEditing
            this.showAddItem = false
            this.showStructure = false
            this.openHeadingEditing = false
            this.openImageEditing = false
            this.openCardEditing = false
        },

        openImageEditingFunc() {
            this.openImageEditing = !this.openImageEditing
            this.showAddItem = false
            this.showStructure = false
            this.openHeadingEditing = false
            this.openParagraphEditing = false
            this.openCardEditing = false
        },

        openCardEditingFunc() {
            this.openCardEditing = !this.openCardEditing
            this.showAddItem = false
            this.showStructure = false
            this.openHeadingEditing = false
            this.openParagraphEditing = false
            this.openImageEditing = false
        },
    },
    getters: {},
})