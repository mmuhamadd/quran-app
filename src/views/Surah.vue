<template>
    <div class="surah-container">
        <div v-if="surah">
            <h1 class="text-center text-6xl text-white font-extrabold font-uthmanicHafs">سورة {{ surah.name_arabic }}</h1>
            <div class="flex items-center justify-center gap-2 mt-2">
                <p>EN: {{ surah.translated_name.name }}</p>
                |
                <p>النوع : {{ surah.revelation_place === "makkah" ? 'مكية' : 'مدنية' }}</p>
                |
                <p>عدد اياتها {{ surah.verses_count }}</p>
            </div>
            <div class="flex items-center justify-center flex-col rtl">
                <p class="text-center font-semibold pt-2" v-if="currentReciter.name">
                    <button class="text-green-400" @click="playSurah">تشغيل السورة </button>
                    بصوت القارئ
                    <router-link class="text-primary" :to="`/reciter/${currentReciter.id}`">{{ currentReciter.name }}</router-link>
                </p>
            </div>
            <!-- read surah -->
            <div id="surah">
                <div class="flex items-center justify-center">
                    <button class="bg-[#2B2A4C] shadow rounded p-2 outline-primary
			 			shadow-2xl shadow-dark-2 m-2" @click="nextVerse">الأية التالية</button>
                    <button class="bg-[#2B2A4C] shadow rounded p-2 outline-primary
			 			shadow-2xl shadow-dark-2 m-2" @click="prevVerse">الأية السابقة</button>
                </div>
                <div class="flex items-center justify-center gap-5 flex-col">
                    <h1 v-if="surah.id != 1 & verse === 0" class="font-uthmanicHafs text-center font-bold text-white text-2xl">بسم الله الرحمن الرحيم</h1>
                    <p id="ayah" class="text-center text-white 
				 			text-4xl rtl flex items-center 
				 			justify-center w-full p-5 gap-2
				 			flex-wrap
				 			font-uthmanicHafs">{{ verse.text }} <small class="inline-flex items-center justify-center text-right ltr font-uthmanicHafs">﴾ {{ verseId }} ﴿</small>
                    </p>
                </div>
                <div class="flex items-center justify-center gap-5 flex-col">
                    <div class="w-[60%] text-xl 
			 		text-center opacity-60 hover:opacity-80 bg-[#F5DD61] 
			 		p-1 rounded text-black
			 		shadow-2xl rtl">
                        <h2 class="flex items-center gap-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                            <small>التفسير الميسر</small>
                        </h2>
                        <p>{{ tafseer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
#surah {
    @apply mt-5
}
</style>
<script defer>
import axios from 'axios';
import { mapGetters } from 'vuex'

export default {
    name: 'Surah',
    data() {
        return {
            currentReciter: { id: null, name: null, audioId: null },
            currentSurah: this.$route.params.id, // the id of the surah,
            surah: {},
            verseId: 1,
            verse: '',
            tafseer: ''
        };
    },
    methods: {
        getSurahInfo: function() {
            axios.get(`https://api.quran.com/api/v4/chapters/${this.$route.params.id}/`)
                .then((res) => {
                    this.surah = res.data.chapter
                    console.log(this.surah)
                })
        },
        prevVerse: function() {
            // if the verse is not the first allready
            if (this.verse != 0) this.verse = this.verse - 1;
            this.getTafseer();
            this.verseId++;
            /* fetch all surahs */
            axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf/${this.$route.params.id}/${this.verseId}.json`)
                .then((res) => {
                    this.verse = res.data
                })
        },
        nextVerse: function() {
            const lastIndex = this.verses.length - 1
            if (this.verse != lastIndex) this.verse = this.verse + 1;
            this.getTafseer();
            this.verseId++;
            /* fetch all surahs */
            axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf/${this.$route.params.id}/${this.verseId}.json`)
                .then((res) => {
                    this.verse = res.data
                })
        },
        getTafseer: function() {
            const url = `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafsir-muyassar/${this.$route.params.id}/${this.verseId}.json`
            axios.get(url)
                .then(res => {
                    this.tafseer = res.data.text
                })
        },
        playSurah: function() {
            /* get the audio */
            let id = this.currentReciter.audioId
            let type = this.currentReciter.type
            axios.get(`https://www.mp3quran.net/api/v3/reciters?reciter=${id}`)
                .then((res) => {
                    const data = res.data
                    const server = data.reciters[0].moshaf[type - 1].server
                    let surah_link = `${server}001.mp3`
                    if (this.surah.id <= 9)
                        surah_link = `${server}00${this.surah.id}.mp3`;
                    else if (this.surah.id >= 10 && !(this.surah.id > 100))
                        surah_link = `${server}0${this.surah.id}.mp3`;
                    else if (this.surah.id >= 100)
                        surah_link = `${server}${this.surah.id}.mp3`;
                    const store = this.$store
                    store.state.recite.name = this.currentReciter.name
                    store.state.recite.surah = this.surah.name
                    store.state.recite.picture = this.currentReciter.picture
                    store.state.audio.src = surah_link
                    store.state.audio.play()
                })
        }
    },
    mounted() {
    	this.getSurahInfo()
        const currentReciter = this.$route.params.reciter
        axios.get('https://api.npoint.io/ac6dbed26cf75d0dccaa').then((res) => {
            /* loop through reciters */
            res.data.forEach((reciter) => {
                reciter
                if (reciter.id === currentReciter) this.currentReciter = reciter // set new 
            });
        })

        /* fetch all surahs */
        axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf/${this.$route.params.id}/${this.verseId}.json`)
            .then((res) => {
                this.verse = res.data
            })

        this.getTafseer()

        window.addEventListener('keypress', e => {
            if (e.key === 'a') {
                this.nextVerse()
            } else if (e.key === 'd') { this.prevVerse() }
        })
        if (this.currentReciter === null) this.currentReciter = null
    }
};
</script>
