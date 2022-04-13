<template>
    <div class="counter-squared">
        <p>    {{ $store.state.counter}}
        <sup>2</sup>=
      {{ $store.getters.counterSquared}}</p>
    
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>