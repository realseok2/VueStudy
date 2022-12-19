<script setup>
  import HelloWorld from './components/HelloWorld.vue'

  
</script>

<script>
  // new Vue({
  //   el: '#test',
  //   data: {              
  //     testData:'WTF!!!'
  //   }
  // })

  export default{
    data() {
      return {
        testData : 'WTF'
      }
    }
  }
</script>

<template>
  <div id="test">
    <h1>vue study</h1>
    <p> {{ testData }} </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
