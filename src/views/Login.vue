<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import UserData from "@/userData.json"
const {push} = useRouter()
const state = reactive({
  username: '',
  password: '',
})
const handelSubmit = () => {
  localStorage.setItem('UserData', JSON.stringify(state))
  const userData = localStorage.getItem("UserData")
  JSON.stringify(UserData) === userData ? push("/2fa") : null;
}
</script>

<template>
  <main class='w-full h-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#1B1C1D] to-black'>
    <div
      class="w-full sm:w-96 md:scale-105 h-auto bg-gradient-to-r from-[#1B1C1D] to-black rounded-md p-8 flex flex-col justify-center border border-[#3C3C3C]">
      <h1 class='font-bold text-2xl text-gray-200 mb-4 ml-1'>Login To Your Account</h1>
      <form @submit.prevent="handelSubmit()" action="" class='flex flex-col gap-3'>
        <div>
          <label for="username" class='text-gray-300 ml-1 py-2 mb-3 text-md font-semibold'>username</label>
          <input type="text" id="username"
            class="shadow-sm border text-white rounded-lg block w-full p-2.5 bg-[#282A2C] border-[#3C3C3C] placeholder-gray-400 shadow-sm-light"
            placeholder="username" v-model="state.username" required />
        </div>
        <div>
          <label for="password" class='text-gray-300 ml-1 py-2 mb-3 text-md font-semibold'>Password</label>
          <input type="password" id="password"
            class="shadow-sm border text-white border-[#3C3C3C] bg-[#282A2C] text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 shadow-sm-light"
            placeholder="Enter Passowrd" v-model="state.password" required />
        </div>
        <input type="submit" value="Login"
          class='bg-gray-300 text-black font-semibold rounded-md p-2' />
        <p class="text-gray-400 ml-2 text-sm">Dont have an account ? Click here <span class='text-white underline'><a
              href="/Register">Register</a></span></p>
      </form>
    </div>
  </main>
</template>