import{_ as s,a as c,C as u}from"./Navbar-C7UwmM7A.js";import{_ as g}from"./imgD-B1jF7LXL.js";import{a as r,b as o,c as n,d as e,f as d,e as a,F as m}from"./index-BPHkqZnK.js";const b="/assets/imgB-YJ6ASkcE.png",x="/assets/imgA-Dkc5sfxj.png",p={},h={class:"w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"},f=n('<div class="w-72 bg-white dark:bg-[#070707] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"><a href="#"><img src="'+b+'"><div class="px-4 py-3 w-72"><span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span><p class="text-lg font-bold text-black dark:text-[#ECECEC] truncate block capitalize">Категория А</p><div class="flex items-center"><p class="text-lg font-semibold text-black dark:text-white cursor-auto my-3">25.000 ₽</p><del><p class="text-sm text-[#F5501C] cursor-auto ml-2">40.000 ₽</p></del></div><button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Подробнее </button></div></a></div><div class="w-72 bg-white dark:bg-[#060606] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"><a href="#"><img src="'+x+'"><div class="px-4 py-3 w-72"><span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span><p class="text-lg font-bold text-black truncate block capitalize dark:text-[#ECECEC]">Категория В</p><div class="flex items-center"><p class="text-lg font-semibold text-black cursor-auto my-3 dark:text-white">32 000 ₽</p><del><p class="text-sm text-[#F5501C] cursor-auto ml-2">45 000 ₽</p></del></div><button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Подробнее </button></div></a></div><div class="w-72 bg-white dark:bg-[#060606] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"><a href="#"><img src="'+g+'"><div class="px-4 py-3 w-72"><span class="text-gray-400 mr-3 uppercase text-xs">AVE MARIA</span><p class="text-lg font-bold text-black truncate block capitalize dark:text-[#ECECEC]">Категория D</p><div class="flex items-center"><p class="text-lg font-semibold text-black cursor-auto my-3 dark:text-[#ECECEC]">40.000 ₽</p><del><p class="text-sm text-[#F5501C] cursor-auto ml-2">52.000 ₽</p></del></div><button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white inline-flex w-full justify-center bg-[#4286F7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4286F7] dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Подробнее </button></div></a></div>',3),A=[f];function y(t,l){return r(),o("section",h,A)}const k=s(p,[["render",y]]),w={},v={class:"lg:mt-32 text-5xl text-left mt-28 mb-14 lg:mb-24 font-bold leading-none tracking-tight text-gray-900 dark:text-white"},_=e("span",{class:"text-[#4286F7] dark:text-blue-500 md:text-7xl lg:text-8xl"},"КАТЕГОРИИ",-1),C=[_];function z(t,l){return r(),o("p",v,C)}const E=s(w,[["render",z]]),F={name:"Form",data(){return{name:"",surname:"",category:"",email:"",phone_input:"",token:"6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ",chatid:"-4140320163"}},methods:{submit(){this.$http.post("https://api.telegram.org/bot{$this.token}/sendMessage?chat_id=${this.chat_id}&text=${fullMessage}").then(t=>{console.log("Succesfully",t)},t=>{console.log(t)})}}},B={id:"authentication-modal",tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},Q=e("div",{class:"relative p-4 w-full max-w-md max-h-full"},[e("div",{class:"relative bg-white rounded-lg shadow dark:bg-[#070707]"},[e("div",{class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"},[e("h3",{class:"text-xl font-bold text-gray-900 dark:text-white"}," Форма обратной связи "),e("button",{type:"button",class:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal"},[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})]),e("span",{class:"sr-only"},"Close modal")])]),e("div",{class:"p-4 md:p-5"},[e("form",{class:"form-data space-y-4",action:"#"},[e("div",null,[e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"},"Имя"),e("input",{type:"name",name:"name",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Александр",required:""})]),e("div",null,[e("label",{for:"surname",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"},"Фамилия"),e("input",{type:"surname",name:"surname",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Мачурин",required:""})]),e("div",null,[e("label",{for:"category",name:"category",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"},"Категория обучения"),e("select",{id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[e("option",{selected:""},"А"),e("option",{value:"US"},"B"),e("option",{value:"CA"},"D")])]),e("div",null,[e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"},"Email"),e("input",{type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"name@company.com",required:""})]),e("label",{for:"phone",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"},"Номер телефона"),e("div",{class:"flex items-center"},[e("button",{id:"dropdown-phone-button","data-dropdown-toggle":"dropdown-phone",class:"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-[#141414] dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600",type:"button"},[e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdklEQVR4nOXUuw2AMAyE4asjCuaIS8rwHAFlVsQiaVFikMs0LGCWsIQQJ33tXx7wv4mIy/maLYiIAzNT4VMtMDN9IJhS8Ucu1UJKxWOJO03rphaWuNMfg3ff+Dq21cLdNx4aQDpATQTQF4IdnAbMJjq4t8/uhT3H8cmtKO8dawAAAABJRU5ErkJggg=="}),d(" +7 "),e("svg",{class:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",src:"/src/assets/RU.png",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})])]),e("div",{id:"dropdown-phone",class:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-[#141414]"},[e("ul",{class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdown-phone-button"},[e("li",null,[e("button",{type:"button",class:"inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",role:"menuitem"},[e("div",{class:"inline-flex items-center"},[e("svg",{fill:"none","aria-hidden":"true",class:"h-4 w-4 me-2",viewBox:"0 0 20 15"},[e("rect",{width:"19.6",height:"14",y:".5",fill:"#fff",rx:"2"}),e("mask",{id:"a",style:{"mask-type":"luminance"},width:"20",height:"15",x:"0",y:"0",maskUnits:"userSpaceOnUse"},[e("rect",{width:"19.6",height:"14",y:".5",fill:"#fff",rx:"2"})]),e("g",{mask:"url(#a)"},[e("path",{fill:"#D02F44","fill-rule":"evenodd",d:"M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z","clip-rule":"evenodd"}),e("path",{fill:"#46467F",d:"M0 .5h8.4v6.533H0z"}),e("g",{filter:"url(#filter0_d_343_121520)"},[e("path",{fill:"url(#paint0_linear_343_121520)","fill-rule":"evenodd",d:"M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z","clip-rule":"evenodd"})])]),e("defs",null,[e("linearGradient",{id:"paint0_linear_343_121520",x1:".933",x2:".933",y1:"1.433",y2:"6.1",gradientUnits:"userSpaceOnUse"},[e("stop",{"stop-color":"#fff"}),e("stop",{offset:"1","stop-color":"#F0F0F0"})]),e("filter",{id:"filter0_d_343_121520",width:"6.533",height:"5.667",x:".933",y:"1.433","color-interpolation-filters":"sRGB",filterUnits:"userSpaceOnUse"},[e("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),e("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),e("feOffset",{dy:"1"}),e("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"}),e("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow_343_121520"}),e("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow_343_121520",result:"shape"})])])]),d(" Россия (+7) ")])])])])]),e("label",{for:"phone_input",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Phone number:"),e("div",{class:"relative w-full"},[e("input",{type:"text",id:"phone_input",name:"phone_input","aria-describedby":"helper-text-explanation",class:"block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#141414] dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"123-456-7890",required:""})])]),e("button",{"data-modal-target":"popup-modal","data-modal-toggle":"popup-modal","data-modal-hide":"authentication-modal",type:"submit",class:"w-full text-white bg-[#4286F7] hover:bg-[#4286F7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Отправить")])])])],-1),H=[Q];function M(t,l,i,X,O,P){return r(),o("div",B,H)}const j=s(F,[["render",M]]),V="data:image/png;base64,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",I={},U={id:"popup-modal",tabindex:"-1",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},D=n('<div class="relative p-4 w-full max-w-md max-h-full"><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><div class="p-4 md:p-5 text-center"><img class="mx-auto mb-3" src="'+V+'" alt=""><h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Благодарим вас, в ближайшее время с вами свяжется наш оператор</h3><button data-modal-hide="popup-modal" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"> Закрыть </button></div></div></div>',1),R=[D];function q(t,l){return r(),o("div",U,R)}const N=s(I,[["render",q]]),J={__name:"Category",setup(t){return(l,i)=>(r(),o(m,null,[a(c),a(E),a(k),a(j),a(N),a(u)],64))}};export{J as default};
