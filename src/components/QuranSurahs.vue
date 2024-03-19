<template>
	<div id="surahs">
		<h1 class="text-center lg:text-right 
		font-bold text-white lg:text-3xl rtl p-6 lg:mr-9 
		lg:border-b lg:w-fit lg:float-right">قراءة القراءن:</h1>
		<div class="w-full flex 
		flex-wrap gap-2 rtl items-center 
		justify-center pt-1">
			<router-link 
			v-for="surah in 
			computedSurahs" 
			:to="`/surah/${surah.id}`" 
			class="flex items-center justify-around 
			p-3 w-[48%] lg:w-[31%] hover:shadow-2xl
			border-2 border-dark-2 hover:border-primary
			rounded h-20 hover:text-white transition">
				<span class="id">{{ surah.id }}</span>
				<p>{{ surah.name }}</p>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	.id {
		@apply w-10 h-10 flex items-center justify-center bg-dark-2;
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}
</style>

<script type="text/javascript">
import axios from 'axios'
export default {
	data(){
		return {
			surahs: []
		}
	},
	computed: {
		computedSurahs(){
			/* get surahs */
			axios.get('https://api.npoint.io/159a45954aea743ebb47')
			.then(res => {
				this.surahs = res.data
			})
			return this.surahs
		}
	}
}
</script>
