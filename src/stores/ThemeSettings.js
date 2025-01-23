import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('toggleTheme', () => {
     const colorThemes = {
          gray: {
              background: 'bg-[#F7F7F7]',
              backgroundTwo: 'bg-[#E4E4E4]',
              button: 'bg-[#CCCCCC]',
              activeButton: 'bg-[#AAAAAA]',
              text: 'text-black',
          },
          salmon: {
              background: 'bg-[#FFA07A]',
              backgroundTwo: 'bg-[#FF7F50]',
              button: 'bg-[#FF6347]',
              activeButton: 'bg-[#FF4500]',
              text: 'text-white',
          },
          teal: {
              background: 'bg-[#E0F7F7]',
              backgroundTwo: 'bg-[#B2E4E4]',
              button: 'bg-[#4DC0C0]',
              activeButton: 'bg-[#008080]',
              text: 'text-white',
          },
          purple: {
              background: 'bg-[#F3E8FF]',
              backgroundTwo: 'bg-[#D8B4FE]',
              button: 'bg-[#A855F7]',
              activeButton: 'bg-[#7E22CE]',
              text: 'text-black',
          },
          orange: {
              background: 'bg-[#FFF7E5]',
              backgroundTwo: 'bg-[#FFD9A8]',
              button: 'bg-[#FFA726]',
              activeButton: 'bg-[#FB8C00]',
              text: 'text-black',
          },
          blue: {
              background: 'bg-[#E6F4FF]',
              backgroundTwo: 'bg-[#90CDF4]',
              button: 'bg-[#4299E1]',
              activeButton: 'bg-[#2B6CB0]',
              text: 'text-white',
          },
          green: {
              background: 'bg-[#E6FFE6]',
              backgroundTwo: 'bg-[#A7F3A1]',
              button: 'bg-[#38A169]',
              activeButton: 'bg-[#2F855A]',
              text: 'text-white',
          },
          pink: {
              background: 'bg-[#FFE6F1]',
              backgroundTwo: 'bg-[#FBB6CE]',
              button: 'bg-[#ED64A6]',
              activeButton: 'bg-[#B83280]',
              text: 'text-black',
          },
          yellow: {
              background: 'bg-[#FFFBE6]',
              backgroundTwo: 'bg-[#FEEBA8]',
              button: 'bg-[#ECC94B]',
              activeButton: 'bg-[#B7791F]',
              text: 'text-black',
          },
          navy: {
              background: 'bg-[#E6EBF8]',
              backgroundTwo: 'bg-[#A3BFFA]',
              button: 'bg-[#4361EE]',
              activeButton: 'bg-[#3A47A3]',
              text: 'text-white',
          },
      };
      
     const currentTheme = ref(colorThemes.gray)
     return { currentTheme, colorThemes }
})
