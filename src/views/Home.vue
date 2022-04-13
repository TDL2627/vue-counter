<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div class="counter">
        {{$store.state.counter}}
      </div>
      <button @click="$store.commit('decreaseCounter') ">-</button>
     <button @click="$store.commit('increaseCounter')">+</button>
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