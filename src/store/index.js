import { createStore } from 'vuex'
import axois from 'axios'
export default createStore({
  state: {
    counter:0,
    colorCode:'red'
  },
  mutations: {
    increaseCounter(state, randomNumber){
      state.counter+=randomNumber
    },
    decreaseCounter(state, randomNumber){
      state.counter-=randomNumber
    }
  },
  actions: {
    increaseCounter({commit}){
    axois('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
commit('increaseCounter', response.data)
  })
  },
  decreaseCounter({commit}){
    axois('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
commit('decreaseCounter', response.data)
  })
  }
} ,
getters:{
counterSquared(state){
  return state.counter * state.counter
}
},
  modules: {
  }
})
