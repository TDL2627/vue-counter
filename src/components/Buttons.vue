<template>
   <button @click="$store.dispatch('decreaseCounter') ">-</button>
     <button @click="$store.dispatch('increaseCounter')">+</button>
</template>

<script>
export default {

}
</script>

<style>

</style>