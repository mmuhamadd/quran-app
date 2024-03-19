<template>
	<div id="quran-list">
		<h1 class="text-white text-3xl font-bold">استماع للقراءن بصوت القارئ:</h1>
		<div class="flex flex-wrap gap-5 p-5">
			<router-link v-for="surah in surahs" class="p-3 w-[47%] lg:w-[31%] bg-dark-2 rounded-2xl cursor-pointer flex items-center justify-center shadow shadow-2xl" :to="`/surah/${surah.id}/${currentReciter}`">
				<h3>{{ surah.name }}</h3>
			</router-link>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	#quran-list {
		@apply p-5;
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
