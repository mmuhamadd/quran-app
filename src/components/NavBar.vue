<template>
	<nav id="navbar" dir="rtl" class="p-5">
		<router-link to="/">
			<img width="80" src="@/assets/logo.webp">
		</router-link>
	</nav>
</template>

<style type="text/css" scoped>
#navbar {
	@apply p-5 shadow shadow-2xl flex gap-5 
	items-center justify-center float-right mb-5 w-screen;
}
</style>

<script type="text/javascript">
export default {
	name: 'NavBar',
	methods: {
		openSideBar: function(){
			this.$store.commit('toggleSidebar');
		}
	}
}
</script>