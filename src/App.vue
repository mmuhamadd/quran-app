<template>
  <div>
    <NavBar/>
    <router-view></router-view>
    <AudioPlayer/>
    <div class="pt-5 pb-5"></div>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    AudioPlayer,
    Footer
  }
}
</script>