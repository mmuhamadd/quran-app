<template>
	<div id="dashboard">
		<h1 class="text-white font-extrabold lg:text-4xl text-center">استمع الي القراءن الكريم بأصوات العديد من القراء</h1>
		<SearchForm/>
		<QuranReciters/>
		<QuranSurahs/>
	</div>
</template>

<style type="text/css" scoped>
	#dashboard {
		@apply flex flex-col w-full;
	}
</style>

<script type="text/javascript">
import SearchForm from '@/components/SearchForm.vue'
import QuranReciters from '@/components/QuranReciters.vue'
import QuranSurahs from '@/components/QuranSurahs.vue'
export default {
	name: 'Dashboard',
	computed: {

	},
	methods: {

	},
	components: {
		SearchForm,
		QuranReciters,
		QuranSurahs
	}
}
</script>