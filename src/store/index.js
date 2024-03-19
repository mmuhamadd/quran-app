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
            axios.get("https://api.npoint.io/159a45954aea743ebb47")
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
            axios.get("https://api.npoint.io/ac6dbed26cf75d0dccaa")
                .then((res) => {
                    commit('setRiciters', res.data)
                })
                .catch((err) => console.log(err))
        },
    }
})


export default store
