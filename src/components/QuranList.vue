<template>
	<div id="quran-list" class="p-5 rtl">
		<h1 class="text-white text-3xl font-bold mb-5">استماع للقراءن بصوت القارئ:</h1>
		<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
			<router-link v-for="surah in surahs" :key="surah.id" class="p-3 bg-dark-2 rounded-2xl cursor-pointer flex items-center justify-center shadow-2xl" :to="`/surah/${surah.id}/${currentReciter}`">
				<h3 class="text-white">{{ surah.name }}</h3>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
#quran-list {
	@apply p-5 w-screen;
}
</style>

<script type="text/javascript">
import axios from 'axios'
export default {
	data(){
		return {
			surahs: [],
			currentReciter: this.$store.state.currentReciter.id
		}
	},
	mounted(){
		const reciterId = this.$route.params.name;
		axios.get("https://api.npoint.io/82738925435068cb3480")
		.then((res)=>{
			this.surahs = res.data;
		})
		.catch(err => console.log(err))
	}	
}
</script>
