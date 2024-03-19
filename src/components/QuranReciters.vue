<template>
  <div class="p-5 rtl">
    <h1 class="text-center lg:text-right font-bold text-white lg:text-3xl">
      القرآن كامل بأصوات القراء:
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
      <router-link v-for="reciter in getReciters" :to="`/reciter/${reciter.id}`" :key="reciter.id" class="p-3 bg-dark-2 rounded-2xl cursor-pointer flex flex-col items-center justify-center shadow-2xl">
        <img :src="${reciter.picture}" width="80" height="80" class="rounded-full object-cover h-20 w-20 mb-3" loading="lazy" :alt="reciter.name" :title="reciter.name">
        <p class="text-white font-medium text-center">{{ reciter.name }}</p>
      </router-link>
    </div>
    <div class="flex items-center justify-center mt-5">
      <button class="p-3 bg-white text-black font-bold rounded bg-[#EE9322]">عرض جميع القراء</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'QuranReciters',
  computed: {
    ...mapGetters(['getReciters']),
  },
  mounted() {
    this.$store.dispatch('fetchReciters');
  },
};
</script>
