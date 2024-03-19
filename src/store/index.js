import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state: {
        reciters: [],
        currentReciter: {},
        quran: [],
        audio: new Audio,
        recite: {
            name: null,
            surah: null,
            picture: null
        },
        side_bar_state: false
    },
    getters: {
        getReciters(state) {
            return state.reciters
        },
        getCurrentReciter(state) {
            return state.currentReciter
        },
        getQuran(state) {
            axios.get("https://github.com/mmuhamadd/quran-app/blob/main/src/json/quran.json")
                .then((res) => {
                    state.quran = res
                    return state.quran
                })
                .catch((err) => console.log(err))
        }
    },
    mutations: {
        setRiciters(state, reciters) {
            state.reciters = reciters;
        },
        toggleSidebar(state) {
            state.side_bar_state = !state.side_bar_state;
        }
    },
    actions: {
        fetchReciters({ commit }) {
            axios.get("https://github.com/mmuhamadd/quran-app/blob/main/src/json/reciters.json")
                .then((res) => {
                    commit('setRiciters', res.data)
                })
                .catch((err) => console.log(err))
        },
    }
})


export default store
