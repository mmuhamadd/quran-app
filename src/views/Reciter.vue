<template>
	<div class="rtl" v-if="reciter != null">
		<div class="p-5">
			<div class="flex float-right items-end  justify-center gap-2">
				<img :src="reciter.picture" :title="reciter.name" :alt="reciter.name" class="rounded object-cover" width="170" height="170">
				<div>
					<h1 class="text-right lg:text-3xl text-2xl pb-3 font-extrabold text-white">-{{ reciter.name }}</h1>
					<p class="text-right">{{ reciter.brief }}</p>
				</div>
			</div>
		</div>
		<div class="mt-10 float-right">
			<QuranList/>
		</div>
	</div>
	<div v-else class="text-center font-extrabold text-red-900 text-3xl">
		قارئ غير موجود !
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
import QuranList from '@/components/QuranList.vue'
export default {
	data(){
		return {
			reciter: null
		}
	},
	mounted(){
		const reciterId = this.$route.params.name;
		axios.get("https://api.npoint.io/ac6dbed26cf75d0dccaa")
		.then((res)=>{
			const reciters = res.data;
			reciters.forEach((reciter)=>{
				if(reciter.id == reciterId){
					this.reciter = reciter;
					this.$store.state.currentReciter = this.reciter;
				}
			});
		})
		.catch(err => console.log(err))
	},
	components: {
		QuranList
	}
}
</script>
