<script setup>
import { RouterView } from "vue-router"
import Header from "@/components/header.vue"
import Sidebar from "@/components/sidebar.vue"
</script>

<template>
    <main class="flex h-screen justify-center">
    <Sidebar/>
    <div class="flex flex-col container h-full">
      <Header/>
      <RouterView/> 
    </div>
  </main>
</template>