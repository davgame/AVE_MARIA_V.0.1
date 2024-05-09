<template>
<header>
    

<nav class="bg-white dark:bg-[#141414] py-2.5 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" class="flex items-center">
        <img src="../assets/LОGO.png" class="mr-3 h-6 sm:h-7 sm:mr-6 dark:hidden" alt="AVE MARIA Logo" />
        <img src="../assets/LogoDark.png" class="mr-3 h-6 sm:h-7 sm:mr-6 hidden dark:block" alt="AVE MARIA Logo ">    
    </a>
    <div class="flex gap-2 items-center lg:order-3 sm:justify-between">
        <button @click="toggleDark()" type="button" data-toggle-dark="light" class="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg data-toggle-icon="moon" class="dark:hidden w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg data-toggle-icon="sun" class="hidden dark:block w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
        </button>
        
        <button data-modal-target="select-modal" data-modal-toggle="select-modal" type="button" class="block text-white bg-[#000000] hover:bg-[#4286F7] hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#4286F7] dark:text-white dark:hover:bg-white dark:hover:text-[#4286F7] focus:outline-none dark:focus:ring-white">Краснодар</button>
        
        <button @click="burgerIsOpened = !burgerIsOpened" data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <box-icon @onclick="onToggleMenu(select-modal)" :name="burgerIsOpened ? 'x' : 'menu'" class="cursor-pointer md:hidden"></box-icon>
        </button>
    </div>
    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li v-for="(item, idx) in listItemMenu" :key="idx">
                  <router-link :to="{name: item.name}" 
                  class="router-link-active block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" 
                  :class=" router.name == item.name ? ['block', 'py-2', 'pr-4', 'pl-3', 'text-white', 'rounded', 'bg-primary-700', 'lg:bg-transparent', 'lg:text-primary-700', 'lg:p-0 dark:text-white']:''" aria-current="page">{{item.text}}</router-link>
              </li>
          </ul>
      </div>
  </div>
</nav>

</header>
</template>

<script setup>
import {RouterLink} from 'vue-router';
import { onMounted, openBlock, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router';

const router = useRoute()
const listItemMenu = ref([
    {
        name: 'home',
        text: 'Главная'
    },
    {
        name: 'category',
        text: 'Категории'
    },
    {
        name: 'autopark',
        text: 'Автопарк'
    },
    {
        name: 'instructor',
        text: 'Инструкторы'
    },
    {
        name: 'autodrome',
        text: 'Автодром'
    },
    {
        name: 'contact',
        text: 'Контакты'
    }
])
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const burgerIsOpened = ref(false)

function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'x' : 'menu'}

</script>


