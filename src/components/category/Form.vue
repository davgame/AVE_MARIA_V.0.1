<template>

<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-[#070707]">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Форма обратной связи
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="form space-y-5" action="#" method="POST" v-on:submit.prevent="formSubmit">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Имя</label>
                        <input type="name" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Александр" required />
                    </div>
                    <div>
                        <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Фамилия</label>
                        <input type="surname" v-model="surname" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Мачурин" required />
                    </div>
                    <div>
                        <label for="category" name="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Категория обучения</label>
                        <select id="category" v-model="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email</label>
                        <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>                  
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Номер Телефона</label>
                        <input type="phone" v-model="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="+7(925)-020-12-72" required />
                    </div>

                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" data-modal-hide="authentication-modal" type="submit" class="btn btn-success w-full text-white bg-[#4286F7] hover:bg-[#4286F7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Отправить</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 
</template>


<script>

import axios from 'axios'

export default{
    name:'From',

    data(){
        return{
            name:"",
            surname:"",
            email:"",
            category:"",
            phone:"",

            //Telegram BOT CONFIG
            token:"6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ",
            chatId:-1002113216362
  
        }
    },

    methods:{
        formSubmit() {
            const fullMessage=`Имя:${this.name}\nФамилия:${this.surname}\nКатегория:${this.category}\nEmail:${this.email}\nТелефон:${this.phone}`

            axios.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
                chat_id: this.chatId,
                text: fullMessage
            }); 
        }
    }
}
</script>