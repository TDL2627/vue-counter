<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div :style="{color: $store.state.colorCode}" class="counter">
        {{$store.state.counter}}
      </div>
      <div class="counter-squared">
        <p>    {{ $store.state.counter}}
        <sup>2</sup>=
      {{ $store.getters.counterSquared}}</p>
    
      </div>
      <button @click="$store.dispatch('decreaseCounter') ">-</button>
     <button @click="$store.dispatch('increaseCounter')">+</button>
     <div>
       <input v-model="$store.state.colorCode" placeholder="Enter color code" type="text">
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {


}
</script>
<style scoped>
div{
  margin:10px;
}
.counter{
  font-size:80px;
}

button{
  font-size:40px;
  width:100px ;
  margin:0 10px;
}
</style>