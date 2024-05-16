<template>


<!-- ✅ Grid Section - Starts Here 👇 -->
<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

  <!--   ✅ Product card 1 - Starts Here 👇 -->
  <div class="w-72 bg-white dark:bg-[#070707] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a>
      <img src="/src/assets/imgB.png" />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span>
        <p class="text-lg font-bold text-black dark:text-[#ECECEC] truncate block capitalize">Категория А</p>

        <div class="flex items-center">
          <p class="text-lg font-semibold text-black dark:text-white cursor-auto my-3">25.000 &#8381</p>
          <del>
            <p class="text-sm text-[#F5501C] cursor-auto ml-2">40.000 &#8381</p>
          </del>
        </div>
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Подробнее
        </button>
      </div>
      
    </a>
  </div>
  <!--   🛑 Product card 1 - Ends Here  -->

  <!--   ✅ Product card 2 - Starts Here 👇 -->
  <div class="w-72 bg-white dark:bg-[#060606] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a>
      <img src="/src/assets/imgA.png" />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span>
        <p class="text-lg font-bold text-black truncate block capitalize dark:text-[#ECECEC] ">Категория В</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3 dark:text-white">32 000 &#8381</p>
          <del>
            <p class="text-sm text-[#F5501C] cursor-auto ml-2">45 000 &#8381</p>
          </del>
        </div>
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Подробнее
        </button>
      </div>
    </a>
  </div>
  <!--   🛑 Product card 2- Ends Here  -->

  <!--   ✅ Product card 3 - Starts Here 👇 -->
  <div class="w-72 bg-white dark:bg-[#060606] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a>
      <img src="/src/assets/imgD.png"/>
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span>
        <p class="text-lg font-bold text-black truncate block capitalize dark:text-[#ECECEC]">Категория D</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3 dark:text-[#ECECEC]">40.000 &#8381</p>
          <del>
            <p class="text-sm text-[#F5501C] cursor-auto ml-2">52.000 &#8381</p>
          </del>
        </div>
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Подробнее
        </button>
      </div>
    </a>
  </div>
</section>

<!-- 🛑 Grid Section - Ends Here -->


</template>