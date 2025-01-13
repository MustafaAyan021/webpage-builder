  <script setup>
  import { reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import UserData from "@/userData.json"

  const router = useRouter()

  const state = reactive({
    username: '',
    password: '',
  })
  const handelSubmit = () => {  
    localStorage.setItem('UserData', JSON.stringify(state))
    const userData = localStorage.getItem("UserData")
    if(JSON.stringify(UserData) === userData){
      router.push('/2fa')
    }
  }
  </script>

  <template>
    <main class='w-full h-screen flex justify-center items-center p-4 bg-gradient-to-br from-black via-gray-800'>
      <div
        class="w-full sm:w-96 md:scale-105 h-auto bg-gradient-to-l from-gray-700 via-gray-800 to-gray-800 rounded-md p-8 flex flex-col justify-center border-gray-700 border ">
        <h1 class='font-bold text-2xl text-gray-200 mb-4 ml-1'>Login To Your Account</h1>
        <form @submit.prevent="handelSubmit()" action="" class='flex flex-col gap-3'>
          <div>
            <label for="username" class='text-gray-300 ml-1 py-2 mb-3 text-md font-semibold'>username</label>
            <input type="text" id="username"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="username" v-model="state.username" required />
          </div>
          <div>
            <label for="password" class='text-gray-300 ml-1 py-2 mb-3 text-md font-semibold'>Password</label>
            <input type="password" id="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Passowrd" v-model="state.password" required />
          </div>
          <input type="submit" value="Login"
            class='bg-blue-700 text-white font-semibold rounded-md p-2 hover:bg-blue-800' />
          <p class="text-gray-400 text-sm">Dont have an account ? Click here <span class='text-blue-700 underline'><a
                href="/Register">Register</a></span></p>
        </form>
      </div>
    </main>
  </template>