import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('toggleTheme', () => {
  let darkSidebarTheme = ref(true);
  function toggleSidebarTheme(isDark){return darkSidebarTheme.value = isDark}

  let darkHeaderTheme = ref(true);
  function toggleHeaderTheme(isDark){return darkHeaderTheme.value = isDark}

  let darkContentAreaTheme = ref(true);
  function toggleContentAreaTheme(isDark){return darkContentAreaTheme.value = isDark}

  return { darkSidebarTheme , toggleSidebarTheme , darkHeaderTheme , toggleHeaderTheme , darkContentAreaTheme , toggleContentAreaTheme }
  
})
