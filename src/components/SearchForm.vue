<template>
	<div>
		<form @submit.prevent="search" class="rtl w-full flex items-center justify-center mt-10 p-5">
			<input type="text" placeholder="-اكتب اسم سورة او اسم قارئ" class="w-full p-5 rounded-2xl bg-[#EEEEEE]
			outline-primary shadow 
			shadow-black text-black font-bold"
			v-model="inputValue"
			>
		</form>
		<div class="w-screen h-screen top-0 fixed 
		flex items-center justify-center 
		bg-[#00000080]" v-if="query">
			<!-- search results -->
			<div class="bg-dark-2 rounded p-5 rtl w-96">
				<div class="p-2 flex items-center justify-center">
					<button @click="query = ''" 
					class="text-xl font-bold 
					hover:text-red-800">اغلاق</button>
				</div>				
				<h1 class="font-bold text-3xl flex
				text-white">نتائج البحث عن  "<p class="text-primary"> {{ query }}</p>"</h1>
				<!-- results for surahs -->
				<div class="pt-5" v-if="surahs != []">
					<router-link class="w-full
					shadow rounded p-5
					shadow-dark-1 flex" 
					v-for="surah in surahs" :to="`/surah/${surah.id}`">
						سورة {{ surah.name }}
					</router-link>
				</div>
				<!-- results for reciters -->
				<div class="pt-5" v-if="reciters != []">
					<router-link class="w-full
					shadow rounded p-5
					shadow-dark-1 flex" 
					v-for="reciter in reciters" :to="`/reciter/${reciter.id}`">
						القارئ {{ reciter.name }}
					</router-link>
				</div>
			</div>
		</div>		
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
	name: 'SearchForm',
	data(){
		return {
			query: '',
			inputValue: '',
			surahs: [],
			reciters: []
		}
	},
	computed: {

	},
	methods: {
		search: function(){
			this.query = this.inputValue // target the query
			console.log(`search for results for ${this.query}`)
			this.searchForSurah(this.query.split(' '))	

			/* clear input */
			this.inputValue = ''		
		},
		searchForSurah: function(query){
			axios.get('https://api.npoint.io/159a45954aea743ebb47')
			.then(res => {
				const surahs = res.data 
				this.surahs = surahs.filter(surah => surah.name.includes(query))
			})
		}
	}
}
</script>
