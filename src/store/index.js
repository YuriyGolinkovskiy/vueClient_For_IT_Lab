import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import catalogModule from './catalogModule';
import cartModule from './cartModule';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        catalogModule,
        cartModule,
    },
});
