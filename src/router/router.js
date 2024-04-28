import { createRouter, createWebHistory } from 'vue-router';


const routes=[
        {path:'', name:'home', component:()=> import('@/views/Home.vue')},
        {path:'/category', name:'category', component:()=> import('@/views/Category.vue')},
        {path:'/instructor', name:'instructor', component:()=> import('@/views/Instructor.vue')},
        {path:'/contact', name:'contact', component:()=> import('@/views/Contact.vue')},
        {path:'/autopark', name:'autopark', component:()=> import('@/views/Autopark.vue')},
        {path:'/autodrome', name:'autodrome', component:()=> import('@/views/Autodrome.vue')}, 
    ]  

const router = createRouter({
    routes,
    history:createWebHistory(),
    linkActiveClass: '#4286F7',
    linkExactActiveClass: '#4286F7',
})


export default router