import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
	{
		path: '/',
		component: ()=> import(/*dashboard*/ '@/views/Dashboard.vue')
	},
	{
		path: '/reciter/:name',
		component: ()=> import(/*reciter*/ '@/views/Reciter.vue'),
		props: true
	},
	{
		path: '/surah/:id/:reciter',
		component: ()=> import(/*surah*/ '@/views/Surah.vue'),
		props: true
	},
	{
		path: '/surah/:id',
		component: ()=> import(/*surah*/ '@/views/Surah.vue'),
		props: true
	}	
	]
})

export default router