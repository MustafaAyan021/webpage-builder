import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useThemeStore = defineStore('toggleTheme', {
    state: () => ({
        colorThemes: {
            gray: {
                backgroundPrimary: 'bg-gray-50',
                backgroundSecondary: 'bg-gray-100',
                button: 'bg-gray-100',
                activeButton: 'bg-gray-200',
                text: 'text-gray-700',
                borderColor: 'border-gray-300',
                hover:'hover:bg-gray-200'
            },
            salmon: {
                backgroundPrimary: 'bg-[#FFA07A]',
                backgroundSecondary: 'bg-[#FF7F50]',
                button: 'bg-[#FF6347]',
                activeButton: '',
                text: 'text-black',
                borderColor: 'border-[#FF6347]',
            },
            teal: {
                backgroundPrimary: 'bg-[#E0F7F7]',
                backgroundSecondary: 'bg-[#B2E4E4]',
                button: 'bg-[#4DC0C0]',
                activeButton: 'bg-[#008080]',
                text: 'text-white',
                borderColor: 'border-white',
            },
            purple: {
                backgroundPrimary: 'bg-[#F3E8FF]',
                backgroundSecondary: 'bg-[#D8B4FE]',
                button: 'bg-[#A855F7]',
                activeButton: 'bg-[#7E22CE]',
                text: 'text-black',
                borderColor: 'border-black',
            },
            orange: {
                backgroundPrimary: 'bg-[#FFF7E5]',
                backgroundSecondary: 'bg-[#FFD9A8]',
                button: 'bg-[#FFA726]',
                activeButton: 'bg-[#FB8C00]',
                text: 'text-black',
                borderColor: 'border-black',
            },
            blue: {
                backgroundPrimary: 'bg-[#E6F4FF]',
                backgroundSecondary: 'bg-[#90CDF4]',
                button: 'bg-[#4299E1]',
                activeButton: 'bg-[#2B6CB0]',
                text: 'text-black ',
                borderColor: 'border-black',
            },
            green: {
                backgroundPrimary: 'bg-[#E6FFE6]',
                backgroundSecondary: 'bg-[#A7F3A1]',
                button: 'bg-[#38A169]',
                activeButton: 'bg-[#2F855A]',
                text: 'text-black',
                borderColor: 'border-black',
            },
            pink: {
                backgroundPrimary: 'bg-[#FFE6F1]',
                backgroundSecondary: 'bg-[#FBB6CE]',
                button: 'bg-[#ED64A6]',
                activeButton: 'bg-[#B83280]',
                text: 'text-black',
                borderColor: 'border-black',
            },
            yellow: {
                backgroundPrimary: 'bg-[#FFFBE6]',
                backgroundSecondary: 'bg-[#FEEBA8]',
                button: 'bg-[#ECC94B]',
                activeButton: 'bg-[#B7791F]',
                text: 'text-black',
                borderColor: 'border-black',
            },
            navy: {
                backgroundPrimary: 'bg-[#E6EBF8]',
                backgroundSecondary: 'bg-[#A3BFFA]',
                button: 'bg-[#4361EE]',
                activeButton: 'bg-[#3A47A3]',
                text: 'text-white',
                borderColor: 'border-white',
            },
        },
        currentTheme:{},
    }),
    actions: {
        initializeTheme(){
           this.currentTheme = this.colorThemes.gray
        },

        setTheme(theme) {
            this.currentTheme = theme
        }
    },
    getters: {
        getCurrentTheme: (state) => state.currentTheme
    }
});