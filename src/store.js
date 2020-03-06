import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: "99",
    name: "王新",
    addres: "山西省 运城市",
    date: "2020-09-12"
  },
  mutations: {
    // commit 为同步操作 写法：this.$store.commit('mutations方法名',值)
    // 一次只改一个值
    // addId(state,id){
    //   state.id = id;
    // },
    // addName(state,name){
    //   state.name = name;
    // },
    // addAddres(state,addres){
    //   state.addres = addres;
    // },
    // addDate(state,date){
    //   state.date = date;
    // }
    // 一次性更改多个值
    addMessage(state, massage) {
      state.id = massage.id;
      state.name = massage.name;
      state.addres = massage.addres;
      state.date = massage.date;
    }
  },
  actions: {
    //dispatch 为异步操作 写法： this.$store.dispatch('action方法名',值)
    
    // addId: ({ commit }) => commit('addId'),
    // addName: ({ commit }) => commit('addName'),
    // addAddres: ({ commit }) => commit('addAddres'),
    // addDate: ({ commit }) => commit('addDate'),
    addMessage: ({
      commit
    }) => commit('addMessage')
  }
})