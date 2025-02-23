import CardsContainer from "@/components/PageBuilderComponents/CardsContainer.vue";
import Footer from "@/components/PageBuilderComponents/Footer.vue";
import Header from "@/components/PageBuilderComponents/Header.vue";
import Heading from "@/components/PageBuilderComponents/Heading.vue";
import Image from "@/components/PageBuilderComponents/Image.vue";
import SubHeading from "@/components/PageBuilderComponents/SubHeading.vue";
import CardSettings from "@/components/PageBuilderSidebarComponents/CardSettings.vue";
import FooterSettings from "@/components/PageBuilderSidebarComponents/FooterSettings.vue";
import HeaderSettings from "@/components/PageBuilderSidebarComponents/HeaderSettings.vue";
import HeadingSettings from "@/components/PageBuilderSidebarComponents/HeadingSettings.vue";
import ImageSettings from "@/components/PageBuilderSidebarComponents/ImageSettings.vue";
import SubHeadingSettings from "@/components/PageBuilderSidebarComponents/SubHeadingSettings.vue";
import { defineStore } from "pinia";
export const usePageBuilderContent = defineStore('PageBuilderContentStore', {
    state:() => ({
       mainContent:[],
       mainContentWidth:'container',
       mobileWidth:'w-[400px]',
       fullScreenStyles:'absolute top-0 left-0 w-full h-[100%] rounded-none z-50 transition-none'
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