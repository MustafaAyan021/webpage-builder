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
    <main class='w-full h-screen flex justify-center items-center p-4 bg-gradient-to-br from-black via-gray-800'>
        <div
            class="w-full sm:w-96 md:scale-105 h-auto bg-gradient-to-l from-gray-700 via-gray-800 to-gray-800 rounded-md p-8 flex flex-col justify-center border-gray-700 border ">
            <h1 class='font-bold text-2xl text-gray-200'>Confirmation Code</h1>
            <p class="text-md w-72 text-gray-500 mb-4">Enter the 6 digit confirmation code that was sent to you</p>
            <form @submit.prevent="handelSubmit()" action="" class='flex flex-col gap-3'>
                <div>
                    <input type="text"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="XX-XX-XX" v-model="state.confirmationCode" required maxlength="6" minlength="6" />
                </div>
                <input type="submit" value="Confirm"
                    class='bg-blue-700 text-white font-semibold rounded-md p-2 hover:bg-blue-800' />
            </form>
        </div>
    </main>
</template>