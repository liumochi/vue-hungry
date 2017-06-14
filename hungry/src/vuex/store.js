import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
export default new Vuex.Store({//Store首字母必须大写，否则报错
	state,
	mutations,
	actions,
	getters
});