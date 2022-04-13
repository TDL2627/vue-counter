<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div class="counter">
        {{counter}}
      </div>
      <button  @click="decreaseCounter">-</button>
     <button @click="increaseCounter">+</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
data(){
  return{
    counter:0
  }
},
methods:{
  increaseCounter(){
    this.counter++
  },
  decreaseCounter(){
    this.counter--
  },
}

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