import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: {}
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    }
  },
  actions: {
    submitForm({ commit }, payload) {
      commit('updateFormData', payload);
    }
  },
  getters: {
    getFormData: (state) => state.formData
  }
});
