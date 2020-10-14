import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './State'
import actions from './Action'
import getters from './Getters'
import mutations from './Mutation'

let store=new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});

export default store;