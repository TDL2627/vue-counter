<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter/>
    <counter-squared/>
  <buttons/>
    <colorcode/>
     
    
  </div>
</template>

<script>

// @ is an alias to /src

export default {

components:{
  'counter':require('@/components/Counter.vue').default,
  'counter-squared':require('@/components/CounterSquared.vue').default,
    'buttons':require('@/components/Buttons.vue').default,
    'colorcode':require('@/components/ColorCode.vue').default,

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