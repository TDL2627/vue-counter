<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter/>
    <counter-squared/>
  <buttons/>
    <ColorCode/>
     
    
  </div>
</template>

<script>
import ColorCode from '../components/ColorCode.vue'
// @ is an alias to /src

export default {

components:{
  'counter':require('@/components/Counter.vue').default,
  'counter-squared':require('@/components/CounterSquared.vue').default,
ColorCode
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