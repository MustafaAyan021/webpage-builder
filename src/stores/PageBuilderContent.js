import { defineStore } from "pinia";

export const usePageBuilderContent = defineStore('PageBuilderContentStore', {
    state:() => ({
       mainContentWidth:'container',
       mobileWidth:'w-[390px]',
       fullScreenStyles:'absolute top-0 left-0 w-full h-[100%] rounded-none z-50'
    }),
    actions:{
       setToDesktopWidth(){
           this.mainContentWidth = 'container'
       },
       setToMobileWidth(){
           this.mainContentWidth = this.mobileWidth
       },
       setToFullScreen(){
           this.mainContentWidth = this.fullScreenStyles
       }
    },
    getters:{}
})