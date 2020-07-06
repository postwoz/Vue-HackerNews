import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

// Vuex 는 플러그인 형태로 사용된다.
Vue.use(Vuex);   

export const store = new Vuex.Store({
    state:{
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {},
        list: []
    },
    getters: {
        fetchedAsk(state){            
            return state.asks;
        },
        fetchedItem(state){
            return state.item;
        },
    },    
    mutations,
    actions
});