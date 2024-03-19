<template>
	<div v-if="recite.surah"
	class="flex bottom-0 fixed rtl
	w-screen h-fit bg-dark-2 p-2 items-center justify-between">
		<img class="rounded-2xl" 
		:src="recite.picture" width="45">
		<div class="flex items-center justify-center flex-col text-center">
			<h5 class="font-bold text-white">سورة {{ recite.surah }}</h5>
			<p>بصوت  القارئ {{ recite.name }}</p>
		</div>
		<div>
			<button @click="pauseOrPlay">Pause</button>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	computed: {
		recite(){
			return this.$store.state.recite
		}
	},
	methods: {
		pauseOrPlay: function(){
			if(this.$store.state.audio.paused === true){
				this.$store.state.audio.play()
			}else {
				this.$store.state.audio.pause()
			}
		}
	}
}
</script>
