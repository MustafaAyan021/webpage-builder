<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import UserData from "@/userData.json"

const router = useRouter()
const state = reactive({
    confirmationCode: ""
})

const handelSubmit = () => {
    localStorage.setItem('confirmationCode', JSON.stringify(state))
    let userData = localStorage.getItem('UserData')
    if (userData === JSON.stringify(UserData)) {
        router.push('/dashboard')
    }
}
</script>

<template>
    <main class='w-full h-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#1B1C1D] to-black'>
        <div
            class="w-full sm:w-96 md:scale-105 h-auto bg-gradient-to-r from-[#1B1C1D] to-black rounded-md p-8 flex flex-col justify-center border border-[#3C3C3C]">
            <h1 class='font-bold text-2xl text-gray-200'>Confirmation Code</h1>
            <p class="text-md w-72 text-gray-500 mb-4">Enter the 6 digit confirmation code that was sent to you</p>
            <form @submit.prevent="handelSubmit()" action="" class='flex flex-col gap-3'>
                <div>
                    <input type="text"
                        class="shadow-sm border text-white rounded-lg block w-full p-2.5 bg-[#282A2C] border-[#3C3C3C] placeholder-gray-400 shadow-sm-light "
                        placeholder="XX-XX-XX" v-model="state.confirmationCode" required maxlength="6" minlength="6" />
                </div>
                <input type="submit" value="Confirm"
                    class='bg-gray-300 text-black font-semibold rounded-md p-2' />
            </form>
        </div>
    </main>
</template>