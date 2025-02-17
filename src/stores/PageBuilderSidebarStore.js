import { defineStore } from "pinia";
export const usePageBuilderSidebarStore = defineStore('PageBuilderSidebarStore', {
    state: () => ({
        sidebarContent: {
            showAddItem: true,
            showStructure: false,
            openHeaderEditing:false,
            openFooterEditing:false,
            openHeadingEditing: false,
            openSubHeadingEditing:false,
            openImageEditing: false,
            openParagraphEditing: false,
            openCardEditing: false,
        }
    }),
    actions: {
        setAllToFalse() {
            Object.keys(this.sidebarContent).forEach(key => {
                this.sidebarContent[key] = false;
            });
        },
        showAddItemFunc() {
            this.setAllToFalse(); 
            this.sidebarContent.showAddItem = !this.sidebarContent.showAddItem; 
        },

        showStructureFunc() {
            this.setAllToFalse(); 
            this.sidebarContent.showStructure = !this.sidebarContent.showStructure; 
        },

        openHeadingEditingFunc() {
            this.setAllToFalse(); 
            this.sidebarContent.openHeadingEditing = !this.sidebarContent.openHeadingEditing; 
        },
        openSubHeadingEditingFunc() {
            this.setAllToFalse(); 
            this.sidebarContent.openSubHeadingEditing = !this.sidebarContent.openSubHeadingEditing; 
        },

        openParagraphEditingFunc() {
            this.setAllToFalse();
            this.sidebarContent.openParagraphEditing = !this.sidebarContent.openParagraphEditing;     
        },

        openImageEditingFunc() {
            this.setAllToFalse();
            this.sidebarContent.openImageEditing = !this.sidebarContent.openImageEditing;
        },

        openCardEditingFunc() {
            this.setAllToFalse();
            this.sidebarContent.openCardEditing = !this.sidebarContent.openCardEditing;
        },
        openHeaderEditingFunc() {
            this.setAllToFalse();
            this.sidebarContent.openHeaderEditing = !this.sidebarContent.openHeaderEditing;
        },
        openFooterEditingFunc() {
            this.setAllToFalse();
            this.sidebarContent.openFooterEditing = !this.sidebarContent.openFooterEditing;
        },
    },
    getters: {},
})

