import {createRouter, createWebHistory} from 'vue-router'
import homePage from '../src/views/homePage'
import aboutPage from '../src/views/aboutPage'
import contactPage from '../src/views/contactPage'
import locationPage from '../src/views/locationPage'
import plansPage from '../src/views/plansPage'


const routes =[
    {
    path: '/',
    name: 'homePage',
    component: homePage
    
},
{
    path: '/aboutPage',
    name: 'aboutPage',
    component: aboutPage
    
},
{
    path:'/contactPage',
    name:'contactPage',
    component: contactPage
},
{
    path:'/locationPage',
    name: 'locationPage',
    component: locationPage
},
{
    path: '/plansPage',
    name: 'plansPage',
    component: plansPage
}
];


const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router