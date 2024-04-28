<template>
    
<div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="p-4 md:p-5 text-center">
                <img class="mx-auto mb-3" src="/src/assets/Email.png" alt="">
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Благодарим вас, в ближайшее время с вами свяжется наш оператор</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</div>

</template>